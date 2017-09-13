import { PopularPipe } from './popular.pipe';

fdescribe('PopularPipe', () => {
  const pipe = new PopularPipe();
  const data = [
    {
      "content":"Testing is fun!",
      "author":"John Doe",
      "votes": 12
    },
    {
      "content":"I don't like testing.",
      "author":"Alex White",
      "votes": 30
    }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort quotes by votes', () => {
    const result = [
      {
        "content":"I don't like testing.",
        "author":"Alex White",
        "votes": 30
      },
      {
        "content":"Testing is fun!",
        "author":"John Doe",
        "votes": 12
      }
    ];
    expect(pipe.transform(data, true)).toEqual(result);
  });
});
