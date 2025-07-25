import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';

interface WeatherForecastDetail {
  dateLabel: string;
  telop: string;
  weather: string;
  wind: string;
  maxTemp: number;
  text: string;
  chanceOfRain?: {
    T06_12: string;
    T12_18: string;
    T18_24: string;
  };
}

interface WeatherForecast {
  area: string;
  forecast: WeatherForecastDetail[];
}

export default class extends Module {
  public readonly name = 'weatherForecast';

  @autobind
  public install() {
    this.post();
    setInterval(this.post, 1000 * 60 * 3);

    return {
      mentionHook: this.mentionHook,
    };
  }

  @autobind
  private async mentionHook(msg: Message) {
    console.log(`メンションを受け取りました: ${msg.text}`);
    // キーワードに応じて天気情報を提供
    const keywords = ['天気', 'てんき', 'weather'];
    const lowerCaseText = msg.text.toLowerCase();
    const containsKeyword = keywords.some((keyword) =>
      lowerCaseText.includes(keyword),
    );
    /* 明日の天気に対応するまでコメントアウト
    if (containsKeyword) {
      const forecast = await this.fetchWeatherForecast();
      if (forecast) {
        msg.reply(forecast, {
          // HTMLの内容をそのまま返信
          immediate: true,
        });
      } else {
        msg.reply('むぅ、今は天気予報をやってないみたいなのじゃ…', {
          immediate: true,
        });
      }
      return true;
    }
*/
    return false;
  }

  @autobind
  private async post() {
    const now = new Date();
    if (now.getHours() !== 7) return; // 朝7時に実行
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const data = this.getData();
    if (data.lastPosted == date) return;
    data.lastPosted = date;
    this.setData(data);

    const forecast = await this.fetchWeatherForecast();
    if (forecast) {
      this.log('Posting weather forecast...');
      this.ai.post({
        text: forecast,
      });
    }
  }
  private async fetchWeatherForecast(): Promise<string | null> {
    const cities = [
      { name: '札幌', code: '016010' },
      { name: '釧路', code: '014020' },
      { name: '青森', code: '020010' },
      { name: '仙台', code: '040010' },
      { name: '東京', code: '130010' },
      { name: '新潟', code: '150010' },
      { name: '金沢', code: '170010' },
      { name: '名古屋', code: '230010' },
      { name: '大阪', code: '270000' },
      { name: '広島', code: '340010' },
      { name: '高知', code: '390010' },
      { name: '福岡', code: '400010' },
      { name: '鹿児島', code: '460010' },
      { name: '沖縄', code: '471010' },
    ];

    const weatherData: WeatherForecast[] = new Array(cities.length);

    const promises = cities.map(async (city, index) => {
      try {
        const response = await fetch(
          `https://weather.tsukumijima.net/api/forecast/city/${city.code}`,
        );
        const data = await response.json();

        // 今日の予報のみ取得
        const todayForecast = data.forecasts.find(
          (forecast: any) => forecast.dateLabel === '今日',
        );

        // descriptionからtextを取得
        const descriptionText = data.description?.text || '情報がありません';

        if (todayForecast) {
          weatherData[index] = {
            area: city.name,
            forecast: [
              {
                dateLabel: todayForecast.dateLabel,
                telop: todayForecast.telop,
                weather: todayForecast.detail.weather,
                wind: todayForecast.detail.wind,
                maxTemp: todayForecast.temperature.max.celsius,
                text: descriptionText,
                chanceOfRain: {
                  T06_12: todayForecast.chanceOfRain?.T06_12 || '--%',
                  T12_18: todayForecast.chanceOfRain?.T12_18 || '--%',
                  T18_24: todayForecast.chanceOfRain?.T18_24 || '--%',
                },
              },
            ],
          };
        } else {
          weatherData[index] = {
            area: city.name,
            forecast: [],
          };
        }
      } catch (error) {
        console.error(`Error fetching weather for ${city.name}:`, error);
        weatherData[index] = {
          area: city.name,
          forecast: [],
        };
      }
    });

    await Promise.all(promises);

    function getWeatherEmoji(telop: string): string {
      if (telop.includes('晴れ')) return '☀️';
      if (telop.includes('快晴')) return '☀️';
      if (telop.includes('晴')) return '☀️';
      if (telop.includes('薄曇り')) return '🌥️';
      if (telop.includes('曇り')) return '☁️';
      if (telop.includes('曇')) return '☁️';
      if (telop.includes('霧雨')) return '🌧';
      if (telop.includes('霧')) return '🌫';
      if (telop.includes('雨')) return '🌧';
      if (telop.includes('雪')) return '⛄';
      if (telop.includes('みぞれ')) return '🌨️';
      if (telop.includes('あられ')) return '🌨️';
      if (telop.includes('ひょう')) return '🧊';
      if (telop.includes('雷')) return '⚡️';
      if (telop.includes('雷雨')) return '⛈️';
      if (telop.includes('霜')) return '❄️';
      if (telop.includes('強風')) return '🌬';
      if (telop.includes('猛暑')) return '🌡️';
      return ''; // その他の場合は空文字
    }

    // 投稿用のまとめテキスト作成
    let forecastSummary =
      'あいちゃんはテレビで今日の天気予報をみているようだ。\n\n 今日の天気 \n\n';

    weatherData.forEach((weather) => {
      if (weather) {
        forecastSummary += `**【${weather.area}】**\n`;
        weather.forecast.forEach((f) => {
          const emojis = f.telop
            .split('のち')
            .map((part) => getWeatherEmoji(part.trim()))
            .join('のち');
          forecastSummary += `    天気: ${emojis ? emojis : f.telop}\n`;
          forecastSummary += `    風: ${f.wind}\n`;
          forecastSummary += `    最高気温: ${f.maxTemp || '不明'}°C\n\n`;
          // 降水確率を追加
          if (f.chanceOfRain) {
            forecastSummary += `    降水確率: ${f.chanceOfRain.T06_12} (06:00〜12:00)\n`;
            forecastSummary += `    降水確率: ${f.chanceOfRain.T12_18} (12:00〜18:00)\n`;
            forecastSummary += `    降水確率: ${f.chanceOfRain.T18_24} (18:00〜24:00)\n`;
          }

          forecastSummary += `\n`;
        });
      }
    });

    return forecastSummary;
  }
}
