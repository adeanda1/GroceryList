
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp


 window.onload = loadCookieList;

var myList = []

function loadCookieList()
{
  var food;
  var str = getCookie("food");
  var arrayCookie = str.split(",");

  for (food = 0; arrayCookie.length > food; food++ )
  {
    displayItem(arrayCookie[food]);
  }

}

function saveList()
{
  var assign
  assign = myList.toString();
  setCookie("food", assign, 3);
}

function clearList()
{
   myList = [];
   var list = document.getElementById("listDisplay");
   list.innerHTML = '';
}

function displayItem(foodpicked)
{

  var index = myList.indexOf(foodpicked);

  if (index == -1) //not in the list, just add, to avoid doubles
  {
   myList.push(foodpicked);

   var list = document.getElementById("listDisplay");
   var item = document.createElement("li");
   var itemName = document.createTextNode(foodpicked);
   item.appendChild(itemName);
   document.getElementById("newItem").value = "";
   var btnClose = document.createElement("button");
   btnClose.classList.add("btn");
   btnClose.classList.add("btn-danger");
   btnClose.classList.add("btn-xs");
   btnClose.addEventListener("click", removeParentListItem);

   var iconClose = document.createElement("span");
   iconClose.classList.add("glyphicon");
   iconClose.classList.add("glyphicon-remove");
   btnClose.appendChild(iconClose);
   item.appendChild(btnClose);
   list.appendChild(item);
}
}


function addItem()
{
  var input = document.getElementById("newItem").value ;

  //myList.push(input);
displayItem(input);
}

function removeParentListItem()
{
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.splice(itemIndex, 1);
}

function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
