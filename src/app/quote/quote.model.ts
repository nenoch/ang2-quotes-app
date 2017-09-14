export class Quote {
  content: string;
  author: string;
  quoteId?: string;
  username?: string;
  votes?: number;
  userId?: string;

  constructor(content: string, author: string, quoteId?: string, votes?: number, username?: string, userId?: string){
    this.content = content;
    this.author = author;
    this.votes = votes || 0;
    this.username = username || 'hacker';
    this.quoteId = quoteId;
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
