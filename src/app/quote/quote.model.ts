export class Quote {
  content: string;
  author: string;
  votes: number;
  username: string;
  messageId?: string;
  userId?: string;

  constructor(content: string, author: string, username: string, messageId?: string, userId?: string, votes?: number){
    this.content = content;
    this.author = author;
    this.votes = votes || 0;
    this.username = username;
    this.messageId = messageId;
    this.userId = userId;
  }

// is this needed?
  voteUp(){
    this.votes += 1;
  }

  voteDown(){
    this.votes -= 1;
  }
}
