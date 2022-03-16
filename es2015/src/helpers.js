

const Choice = (Items) => {
  let i = Math.floor(Math.random() * Items.length);
    
    return Items[i]
    
    }

    function Remove(item, items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
          }
        }
      }

export  {Choice, Remove}