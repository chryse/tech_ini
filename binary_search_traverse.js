var btree = {
    value: 10,
    left: {
        value: 5,
        left: {
          value: 3,
          left: {
            value: 1,
            left: null,
            right: null
          },
          right: {
            value: 2,
            left: null,
            right: null
          }
        },
        right: {
          value: 4,
          left: null,
          right: null
        }
      },
    right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    }

function search(tree) {

  if(tree.value == null) return null;
  else {
    var view = [tree];
    // console.log(view);
    while(view.length > 0) {
      var current = view[0];

      if(current.left) {
        view.push(current.left);
      }
      if(current.right) {
        view.push(current.right);
      }
      console.log(view.shift());
      console.log("=======");
      // console.log("view", view);
    }
  }
}

search(btree);
