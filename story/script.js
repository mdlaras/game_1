Macro.add("addnewItem",{
    handler : function(){
            var a = Object.create(item);
            a.Name = this.args[0];
            a.Category = this.args[1];
            a.Quantity = 1;
            a.Description = this.args[2];
            inventory.nameList.push(a.Name);
            inventory.items.push(a);
    }
}
);

Macro.add
Macro.add("showInventory",{
    handler : function(){
        var dialog = document.createElement('div');
        dialog.className = "inventory";
        var table = document.createElement('table');
        table.id = "items";
        var i;
        var num = inventory.nameList.length;
        if (num > 0){
            dialog.innerHTML = "<div class=inventory-content><button type=button id=cancel_edit>Exit</button><h1>Items</h1><div class=items-content><table id=items><tr><th>Name</th><th>Quantitiy</th></tr></table></div><div class= description><div class=item-description></div></div></div>";
            for (i=0; i< num; i++){
                var table = dialog.getElementsByTagName('table')[0];
                var row = table.insertRow(i+1);
                var itemName = row.insertCell();
                var itemQuantity = row.insertCell();
                itemName.innerHTML = "<button type=button name=item-button></button>";
                var itemButton = itemName.getElementsByTagName('button')[0];
                itemButton.value = inventory.items[i].Description;
                itemButton.innerText = inventory.items[i].Name;
                itemButton.id = i;
                var a = inventory.items[i].Description;
                itemButton.onclick = function(){
                    var desc = document.getElementsByClassName('item-description')[document.getElementsByClassName('item-description').length - 1];
                    desc.innerText = this.value;
                };
                var b = inventory.items[i].Quantity
                itemQuantity.innerText = b;
            }
            
        }
        else{
            dialog.innerHTML = "<div class=inventory-content><button type=button id=cancel_edit>Exit</button><p>Seems that there's nothing here...</p></div>";
        }
        document.body.appendChild(dialog);
        dialog.style.display = "block";
        dialog.autofocus = true;
        var button = dialog.getElementsByTagName('button')[0];
        button.onclick = function(){dialog.style.display="none"};
      
    }
}
)



    