var btree = {
    data: 10,
    left: {
        data: 5,
        left: {
          data: 2,
          left: {
            data: 1,
            left: null,
            right: null
          },
          right: {
            data: 3,
            left: null,
            right: null
          }
        },
        right: {
          data: 6,
          left: null,
          right: null
        }
      },
    right: {
        data: 16,
        left: {
          data: 5,
          left: null,
          right: null
        },
        right: {
          data: 19,
          left: null,
          right: null
        }
      }
    }

function search(tree) {

  if(tree.data == null) {
    return null;
  }

  else {
    var view = [tree];
    // console.log(view);
    while(view.length > 0) {
      var current = view[0];

      if(current.left) {
        console.log("current.left.data:", current.left.data, " current.data:", current.data);
        if(current.data < current.left.data) {
          return false;
        }
        view.push(current.left);
      }
      if(current.right) {
        console.log("current.right.data:", current.right.data, " current.data:", current.data);
        if(current.data > current.right.data) {
          return false;
        }
        view.push(current.right);
      }
      console.log("view[0]", view[0]);
      console.log("view.length", view.length);
      view.shift();
      // console.log(view.shift());
      // console.log("=======");
      // console.log("view", view);
    }
    return true;
  }
  
}

console.log(search(btree));
