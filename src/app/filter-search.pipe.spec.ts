import { FilterSearchPipe } from './filter-search.pipe';

fdescribe('FilterSearchPipe', () => {
  const pipe = new FilterSearchPipe();
  const data = [
    {
      "content":"Testing is fun!",
      "author":"John Doe"
    },
    {
      "content":"I don't like testing.",
      "author":"Alex White"
    }
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return unfiltered array if term is an empty string ', () => {
    expect(pipe.transform(data,null)).toEqual(data);
  });

  it('should return filtered array if term is given', () => {
    let term = "FUN";
    let term2 = "alex";
    let result = [
      {
        "content":"Testing is fun!",
        "author":"John Doe"
      }
    ];
    let result2 = [
      {
        "content":"I don't like testing.",
        "author":"Alex White"
      }
    ];
    expect(pipe.transform(data,term)).toEqual(result);
    expect(pipe.transform(data,term2)).toEqual(result2);

  });

});
