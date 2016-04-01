describe('insertionSort', function () {

  it('should be a function', function () {

    expect(insertionSort).to.be.a('function');
  });

  it('should return an array', function () {

    expect(insertionSort([2, 1, 3])).to.be.an('array');
  });

  it('should return the sorted array', function () {

    expect(insertionSort([3, 5, 4, 1])).to.deep.equal([1, 3, 4, 5]);
  });
});