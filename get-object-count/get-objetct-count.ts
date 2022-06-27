type Props = {
    x: number;
    y: number;
  };
  
  function getCount(objects: Props[]) {
    let count = 0;
    objects.forEach(object => {
      if (object.x === object.y) {
        count += 1;
      }
    });
    return count;
  }
  