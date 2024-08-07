import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';
import serifs from '@/serifs';

export default class extends Module {
  public readonly name = 'follow';

  @autobind
  public install() {
    const tl = this.ai.connection.useSharedConnection('localTimeline');

    tl.on('note', this.onNote);
    return {
      mentionHook: this.mentionHook,
    };
  }

  @autobind
  private async mentionHook(msg: Message) {
    if (msg.text && msg.includes(['フォロー', 'フォロバ', 'follow me'])) {
      if (msg.user.isRenoteMuted)
        return {
          reaction: msg.friend.love >= 0 ? ':neofox_hug:' : null,
        };
      if (msg.user.host && !msg.user.isFollowed && msg.friend.love >= 0) {
        msg.reply(serifs.core.followBackErr);
        return {
          reaction: ':neofox_approve:',
        };
      }
      if (!msg.user.isFollowing) {
        this.ai.api('following/create', {
          userId: msg.userId,
        });
        msg.reply(serifs.core.followBack(msg.friend.name));
        return {
          reaction: msg.friend.love >= 0 ? ':neofox_blep:' : null,
        };
      } else {
        msg.reply(serifs.core.alreadyFollowBack(msg.friend.name));
        return {
          reaction: msg.friend.love >= 0 ? ':neofox_thinking:' : null,
        };
      }
    } else {
      return false;
    }
  }
  @autobind
  private onNote(note: any) {
    if (
      !note.user?.isBot &&
      note.user.host &&
      note.user.isFollowing &&
      !note.user.isFollowed
    ) {
      this.log('following/delete: ' + note.userId);
      this.ai.api('following/delete', {
        userId: note.userId,
      });
    }
  }
}
