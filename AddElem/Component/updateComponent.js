
var elements=[]
elements[0]="Actinium"
elements[1]="Aluminum"
elements[2]="Americium"
elements[3]="Antimony"
elements[4]="Argon"
elements[5]="Arsenic"
elements[6]="Astatine"
elements[7]="Barium"
elements[8]="Berkelium"
elements[9]="Beryllium"
elements[10]="Bismuth"
elements[11]="Bohrium"
elements[12]="Boron"
elements[13]="Bromine"//Br
elements[14]="Cadmium"//Cd
elements[15]="Calcium"//Ca
elements[16]="Californium"//Cf
elements[17]="Carbon"//C
elements[18]="Cerium"//Ce
elements[19]="Cesium"//Cs
elements[20]="Chlorine"//Cl
elements[21]="Chromium"//Cr
elements[22]="Cobalt"//Co
elements[23]="Copernicium"//Cn
elements[24]="Copper"//Cu
elements[25]="Curium"//Cm
elements[26]="Darmstadtium"//Ds
elements[27]="Dubnium"//Db
elements[28]="Dysprosium"//Dy
elements[29]="Einsteinium"//Es
elements[30]="Erbium"//Er
elements[31]="Europium"//Eu
elements[32]="Fermium"//Fm
elements[33]="Flerovium"//Fl
elements[34]="Fluorine"//F
elements[35]="Francium"//Fr
elements[36]="Gadolinium"//Gd
elements[37]="Gallium"//Ga
elements[38]="Germanium"//Ge
elements[39]="Gold"//Au
elements[40]="Hafnium"//Hf
elements[41]="Hassium"//Hs
elements[42]="Helium"//He
elements[43]="Holmium"//Ho
elements[44]="Hydrogen"//H
elements[45]="Indium"//In
elements[46]="Iodine"//I
elements[47]="Iridium"//Ir
elements[48]="Iron"//Fe
elements[49]="Krypton"//Kr
elements[50]="Lanthanum"//La
elements[51]="Lawrencium"//Lr
elements[52]="Lead"//Pb
elements[53]="Lithium"//Li
elements[54]="Livermorium"//Lv
elements[55]="Lutetium"//Lu
elements[56]="Magnesium"//Mg
elements[57]="Manganese"//Mn
elements[58]="Meitnerium"//Mt
elements[59]="Mendelevium"//Md
elements[60]="Mercury"//Hg
elements[61]="Molybdenum"//Mo
        elements[62]="Moscovium"//Zr
elements[63]="Neodymium"//Nd
elements[64]="Neon"//Ne
elements[65]="Neptunium"//Np
elements[66]="Nickel"//Ni
    elements[67]="Nihonium"
elements[68]="Niobium"//Nb
elements[69]="Nitrogen"//N
elements[70]="Nobelium"//No
    elements[71]="Oganesson"//Zr
elements[72]="Osmium"//Os
elements[73]="Oxygen"//O
elements[74]="Palladium"//Pd
elements[75]="Phosphorus"//P
elements[76]="Platinum"//Pt
elements[77]="Plutonium"//Pu
elements[78]="Polonium"//Po
elements[79]="Potassium"//K
elements[80]="Praseodymium"//Pr
elements[81]="Promethium"//Pm
elements[82]="Protactinium"//Pa
elements[83]="Radium"//Ra
elements[84]="Radon"//Rn
elements[85]="Rhenium"//Re
elements[86]="Rhodium"//Rh
elements[87]="Roentgenium"//Rg
elements[88]="Rubidium"//Rb
elements[89]="Ruthenium"//Ru
elements[90]="Rutherfordium"//Rf
elements[91]="Samarium"//Sm
elements[92]="Scandium"//Sc
elements[93]="Seaborgium"//Sg
elements[94]="Selenium"//Se
elements[95]="Silicon"//Si
elements[96]="Silver"//Ag
elements[97]="Sodium"//Na
elements[98]="Strontium"//Sr
elements[99]="Sulfur"//S
elements[100]="Tantalum"//Ta
elements[101]="Technetium"//Tc
elements[102]="Tellurium"//Te
    elements[103]="Tennessine"//Zr
elements[104]="Terbium"//Tb        ???????????????
elements[105]="Thallium"//Tl
elements[106]="Thorium"//Th
elements[107]="Thulium"//Tm
elements[108]="Tin"//Sn
elements[109]="Titanium"//Ti
elements[110]="Tungsten"//W
elements[111]="Uranium"//U
elements[112]="Vanadium"//V
elements[113]="Xenon"//Xe
elements[114]="Ytterbium"//Yb
elements[115]="Yttrium"//Y
elements[116]="Zinc"//Zn
elements[117]="Zirconium"//Zr

var ComponentDoc
function getComponentLibrary()
{

if(!ComponentDoc)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Library/Component.svg", true);
    xhr.onload = function()
    {
        var xmlString = this.responseText

        //---DOMParser---
        var parser = new DOMParser();
        ComponentDoc = parser.parseFromString(xmlString, "text/xml").documentElement;
        //---clear previous table----
        var rows = componentTable.rows
        for(var k = rows.length-1; k>=0; k--)
            componentTable.deleteRow(rows[k])

           var rowCnt=1

            var row = componentTable.insertRow(0)
            row.align = "center"
            var categoryCell = row.insertCell(0).innerHTML = "Category"
            var descriptionCell = row.insertCell(1).innerHTML = "Description"
            var titleCell = row.insertCell(2).innerHTML = "Description"



            var previewCell = row.insertCell(3)

            //----write table---
            var groups = ComponentDoc.childNodes

        for(var k = 0; k<groups.length; k++)
        {
            var group = groups.item(k)
           if(group.nodeName!="#text")
           {
                 var description = group.getAttribute("description")

                    var id = group.getAttribute("id")
                    var category = group.getAttribute("category")
                     var title = group.getAttribute("title")

                    var name = group.getAttribute("name")
                    var utcMS = +group.getAttribute("utcMS")
                    var date = new Date(utcMS).toLocaleString()

                    var svgContainer=document.createElementNS(NS,"svg")
                svgContainer.setAttribute("width","100%")
                svgContainer.setAttribute("height","100%")
                svgContainer.setAttribute("overflow","visible")
                      var clone=group.cloneNode(true)



                      svgContainer.appendChild(clone)
                      var idSVG="SVG_Component"+k
                      svgContainer.setAttribute("id",idSVG)
                   //var bb=clone.getBBox()
                  // clone.setAttribute("viewBox","0 0 "+bb.width+" "+bb.height)
                    // var svgString=new XMLSerializer().serializeToString(svg)
                    var row = componentTable.insertRow(rowCnt++)

                    var cntr = (rowCnt)/2+""
                    if(cntr.indexOf('.')!=-1)
                        var bg = "#aadc82"
                        else
                            var bg = "#f0e99c"
                            row.style.background = bg
                             var categoryCell = row.insertCell(0).innerHTML = category
                            var titleCell = row.insertCell(1).innerHTML = title
                            var descriptionCell = row.insertCell(2).innerHTML = description
                            //var nameCell = row.insertCell(3).innerHTML = name
                            //var dateCell = row.insertCell(4).innerHTML = date
                            var previewCell = row.insertCell(3)
                             previewCell.style.padding="5px"

                             //previewCell.style.width=group.getAttribute("nativeWidth")+"px"
                             //previewCell.style.height=group.getAttribute("nativeHeight")+"px"
                             var svgString=new XMLSerializer().serializeToString(svgContainer)

                            previewCell.innerHTML ="<div style='width:80px;height:60px;'>"+svgString+"</div>"
                            previewCell.title="Click to place in drawing"
                            previewCell.setAttribute("onClick","this.style.border='4px inset violet';placeComponentInDrawing("+id+")")
                                var svg=document.getElementById(idSVG)
                            	var bb=svg.getBBox()
                            	var bbw=bb.width
                            	var bbh=bb.height
                                  var divWH=60

                                //--use greater of bbw vs bbh--
                            	if(bbw>=bbh)
                            		var factor=bbw/divWH
                            	else
                            		var factor=bbh/divWH

                            	var vbWH=divWH*factor

                            	var vbX=(bbw-vbWH)/2
                            	var vbY=(bbh-vbWH)/2
                                //---IE/CH---
                            	if(!mySVG.viewBox.baseVal )
                            	{
                               	 	var ViewBox=svg.viewBox.baseVal
                            		ViewBox.x=vbX
                            		ViewBox.y=vbY
                            		ViewBox.width=vbWH
                            		ViewBox.height=vbWH
                            	}
                            	else
                            		svg.setAttribute("viewBox",vbX+" "+vbY+" "+vbWH+" "+vbWH)

            }
      }
         componentTableCloseButton.style.visibility = "visible"
        LoadedComponentArray=[]
        componentTableDiv.style.top = "60px"
        componentTableDiv.style.visibility = "visible"
        setComponentEditDrag()
         getComponentLibraryButton.style.borderStyle = "inset"

       CookieEmail=getCookie("email")
       CookieName=getCookie("name")


      if(CookieEmail)
      {  listMyComponentIDs()

      }

          disableAllButtons()

    }
    xhr.send()
    }
    else
    {
         componentTableCloseButton.style.visibility = "visible"
        LoadedComponentArray=[]
        componentTableDiv.style.top = "60px"
        componentTableDiv.style.visibility = "visible"
        setComponentEditDrag()
         disableAllButtons()
    }
}

function refreshComponentLibrary()
{
   var cw=addElemComponentCw
    ComponentDoc=null
    closeDrawComponent()
    getComponentLibrary()
   cw.refreshComponentLibraryButton.disabled=true
}


function placeComponentInDrawing(id)
{



   var component=id.cloneNode("true")





   component.setAttribute("parentid",component.id)

   component.removeAttribute("title")
   component.removeAttribute("description")

    var utcms=new Date().getTime()
    var id="component"+utcms
   component.setAttribute("id",id)

    component.setAttribute("class", "dragTargetObj")
    var rects=component.getElementsByTagName("rect")
    var coverRect=rects[rects.length-1]
    coverRect.style.cursor = "move"

     var rects=component.getElementsByTagName("rect")
        var coverRect=rects[rects.length-1]
        coverRect.setAttribute('onmousedown',"editDrawComponent("+id+",evt)")

    LoadedComponentArray.push(component)

   domElemG.appendChild(component)

  //---reduce scale of large custom components----
    var bb=component.getBBox()
    if(component.getAttribute("category")=="Skeletal Structure")
      addScale(component,.5)
    else if(bb.width>200 || bb.height>200)
    {
     addScale(component,.3)  //---transformAdd.js---
    }

}


function closeComponentTable()
{
   for(var k=0;k<LoadedComponentArray.length;k++)
   {
        var component=LoadedComponentArray[k]
        var rects=component.getElementsByTagName("rect")
        var coverRect=rects[rects.length-1]
        coverRect.setAttribute('onmousedown',"editDrawComponent("+component.id+",evt)")
        component.setAttribute("class","componentElem")
        coverRect.style.cursor="default"
    }
   mySVG.removeAttribute("onmousedown")
   mySVG.removeAttribute("onmousemove")
   mySVG.removeAttribute("onmouseup")

   LoadedComponentArray=[]
  showSourceSVG()
 componentTableDiv.style.visibility='hidden'
  componentTableCloseButton.style.visibility = "hidden"
  getComponentLibraryButton.style.borderStyle = ""
   enableAllButtons()
}


var InsertComponent
function addComponent(myId)
{
    for(var k = 0; k<ComponentDoc.childNodes.length; k++)
    {
        var component = ComponentDoc.childNodes.item(k)
        var componentId = component.getAttribute("id")
        {
            if(componentId==myId)
            {
                InsertComponent = component.cloneNode(true)
                previewTitleDiv.innerHTML = component.getAttribute("title")
                var width = +component.getAttribute("width")
                var height = +component.getAttribute("height")
               previewComponentFrameDiv.style.width = (width+10)+"px"
               // previewComponentFrameDiv.style.height = (height+60) +"px"

                previewComponentFrame.style.width = width+"px"
                previewComponentFrame.style.height = height+"px"
                previewComponentFrame.contentWindow.document.body.innerHTML += new XMLSerializer().serializeToString(component)
                previewComponentFrameDiv.style.display = "block"

                var pos = getPosition(openLibraryButton)
                previewComponentFrameDiv.style.top = (pos.y+10)+"px"
                d3.select("#previewComponentFrameDiv").transition(900).style("height",(height+60)+"px" )
               // d3.select("#previewComponentFrameDiv").transition(900).style("width",(width+10)+"px" )

                break
            }

        }

    }
}

function listMyComponentIDs()
{

       //---clear previous table----
        var rows = componentListTable.rows
        for(var k = rows.length-1; k>=0; k--)
            componentListTable.deleteRow(rows[k])

              var myEmail=CookieEmail

            //----write table---
            var groups = ComponentDoc.childNodes
            var cnt=0
        for(var k = 0; k<groups.length; k++)
        {
            var group = groups.item(k)
           if(group.nodeName!="#text")
           {
            var id = group.getAttribute("id")
            var title = group.getAttribute("title")
            var description = group.getAttribute("description")
            var email = group.getAttribute("email")

            if(email==myEmail)
            {
                var row = componentListTable.insertRow(cnt++)
                row.id="row"+id
               // var idCell = row.insertCell(0).innerHTML = id
                var titleCell = row.insertCell(0).innerHTML = title
                var descriptionCell = row.insertCell(1).innerHTML = description
                var removeCell = row.insertCell(2).innerHTML ="<button style=background:red onClick=this.disabled=true;removeMyComponent('"+id+"')>remove</button>"
            }
           }

        }
        componentListTable.style.display = "block"


}


function removeMyComponent(id)
{

    var svgString = "<remove myId='"+id+"' myEmail='"+CookieEmail+"' />"

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "_ASP/removeComponent.asp", true);
    xhr.onload = function()
    {
        if (this.status == 200)
        {

           document.getElementById("row"+id).style.background="gainsboro"

        }


    };

    xhr.send(svgString);

}


function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },15);
}


//=============================Retrieve(Edit)/Remove==============================
function componentRetrieveButtonClicked()
{

    coverRect.style.display="none"
    sendComponentUpdateMessageSpan.innerHTML = ""

    var myId = retrieveComponentIdValue.value
    var myEmail = retrieveComponentEmailValue.value
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LIBRARY/Component.svg", true);
    xhr.onload = function()
    {
        var xmlString = this.responseText

        //---DOMParser---
        var parser = new DOMParser();
        ComponentDoc = parser.parseFromString(xmlString, "text/xml").documentElement;
        var components = ComponentDoc.childNodes

        for(var k = 0; k<components.length; k++)
        {
            var component  = components.item(k)
           if(component.nodeName!="#text")
           {
            var id = component.getAttribute("id")
            var email = component.getAttribute("email")

            if(id==myId&&myEmail==email)
            {


                //---split component()----
                splitComponent(component)
               var category=component.getAttribute("category")
                for(j=0;j<myComponentCategoryUpdateSelect.length;j++)
                {
                   var cat=myComponentCategoryUpdateSelect.options[j].text
                   if(cat==category)
                   {
                     myComponentCategoryUpdateSelect.selectedIndex=j
                    break
                   }
                }


                myComponentTitleUpdateValue.value = component.getAttribute("title")
                myComponentDescriptionUpdateValue.value = component.getAttribute("description")
                myComponentNameUpdateValue.value = component.getAttribute("name")
                myComponentEmailUpdateValue.value = email
                retrieveComponentUpdateDiv.style.display = "block"
                  scrollToTop(600)
                break;
            }
           }
        }

    }
    xhr.send()
}

var ComponentEditArray=[]
function splitComponent(component)
{


 var matrix = component.transform.baseVal.consolidate().matrix;

        var transX = matrix.e
        var transY = matrix.f
     console.log(transX)
ComponentEditArray=[]
   //---place at center---
   var cx=+mySVG.getAttribute("width")/2
   var cy=+mySVG.getAttribute("height")/2
   clearButtonClicked()

component.removeChild(component.lastChild) //--the cover rect---
   var elems=component.childNodes
   var utcMS=new Date().getTime()
   for(var k=0;k<elems.length;k++)
   {



       var clone=elems.item(k).cloneNode(true)



        var cloneTfmRequest = mySVG.createSVGTransform()
        var myTransList = clone.transform
        var objTransList = myTransList.baseVal
        cloneTfmRequest.setTranslate(transX, transY)
        objTransList.appendItem(cloneTfmRequest)
        objTransList.consolidate()



       parent=clone.getAttribute('parent')
       if(parent=="domAddElemG")
       {
         if(clone.nodeName=="circle")
         {
            clone.id="circle"+(utcMS+k)
            clone.setAttribute("onmousedown", "editCircleDraw("+clone.id+",evt)")
            clone.setAttribute("class", "addElem")
            domAddElemG.appendChild(clone)
         }
         if(clone.nodeName=="ellipse")
         {
            clone.id="ellipse"+(utcMS+k)
            clone.setAttribute("onmousedown", "editEllipseDraw("+clone.id+",evt)")
            clone.setAttribute("class", "addElem")
            domAddElemG.appendChild(clone)
         }
         if(clone.nodeName=="text")
         {
            clone.id="text"+(utcMS+k)
            clone.setAttribute("onmousedown", "editTextDraw("+clone.id+",evt)")
            clone.setAttribute("class", "addElem")
            domAddElemG.appendChild(clone)
         }
         if(clone.nodeName=="rect")
         {
            clone.id="rect"+(utcMS+k)
            clone.setAttribute("onmousedown", "editRectDraw("+clone.id+",evt)")
            clone.setAttribute("class", "addElem")
            domAddElemG.appendChild(clone)
         }
         if(clone.nodeName=="polygon")
         {
            clone.id="polygon"+(utcMS+k)
            clone.setAttribute("onmousedown", "editPolygonDraw("+clone.id+",evt)")
            clone.setAttribute("class", "addElem")
            domAddElemG.appendChild(clone)
         }
       }
       if(parent=="domAddPathG")
       {
            clone.id="path"+(utcMS+k)
            clone.setAttribute("onmousedown", "editPathDraw("+clone.id+",evt)")
            clone.setAttribute("class", "addPath")
            domAddPathG.appendChild(clone)
       }
       if(parent=="domAddIconG")
       {
            clone.id="icon"+(utcMS+k)
            clone.setAttribute("onmousedown", "editIconStart(evt)")

            domAddIconG.appendChild(clone)
       }
       if(parent=="domAddSymbolG")
       {
            clone.id="symbol"+(utcMS+k)
            clone.setAttribute("onmousedown", "editSymbolDraw("+clone.id+",evt)")

            domAddSymbolG.appendChild(clone)
       }
           if(parent=="domAddHmiG")
            {
                for(var p = 0; p<elem.childNodes.length; p++)
                {
                    var el = elem.childNodes.item(p)
                    if(el.nodeName!="#text")
                    {
                        var myNodeName = el.nodeName

                        el.setAttribute("class", "dragTargetObj")

                        if(myNodeName=="ellipse")
                        {
                            var myId="control"+p
                             el.setAttribute("id", myId)
                            el.setAttribute("onmousedown", "editControlDraw("+myId+",evt)");

                        }
                        if(myNodeName=="g" && el.getAttribute("myStatus"))
                        {
                            var myId="pilotLight"+p
                             el.setAttribute("id", myId)
                            el.setAttribute("onmousedown", "editPilotLightDraw("+myId+",evt)");

                        }
                        if(myNodeName=="g" && el.firstChild.nodeName=="ellipse")
                        {
                             var myId="PID"+p
                             el.setAttribute("id", myId)
                            el.setAttribute("onmousedown", "editPIDDraw("+myId+",evt)");

                        }
                        if(myNodeName=="g" && el.getAttribute("max"))
                        {
                              var myId="gauge"+p
                             el.setAttribute("id", myId)
                            el.setAttribute("onmousedown", "editGaugeDraw("+myId+",evt)");
                        }
                        domAddHmiG.appendChild(el.cloneNode(true))
                    }
                }

            }
       if(parent=="domElemG")
       {
            clone.id="component"+(utcMS+k)
            clone.setAttribute("onmousedown", "editComponentDraw("+clone.id+",evt)")
            domElemG.appendChild(clone)
       }
       ComponentEditArray.push(clone)

    }


    showSourceSVG()
}
