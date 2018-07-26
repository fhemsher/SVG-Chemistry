function previewMolecules()
{
    helpDiv.style.visibility="hidden"
    helpDiv.style.height="1px"
    selectDrawElemDiv.style.visibility="hidden"
    introDiv.style.visibility="hidden"
    moleculeHelpDiv.style.visibility="hidden"
    componentHelpLibraryDiv.style.visibility="hidden"
    componentHelpLibraryDiv.style.height="1px"
    componentTableCloseButton.style.visibility="hidden"
    schematicHelpLibraryDiv.style.visibility="hidden"
    schematicHelpLibraryDiv.style.height="1px"

    previewMoleculeFrame.src = "AddElem/Molecule/molecules-master/examples/previewMoleculeFrame2.htm"

    previewMoleculeFrameDiv.style.visibility="visible"
}

function closeMoleculePreview()
{
    previewMoleculeFrameDiv.style.visibility="hidden"

   selectDrawElemDiv.style.visibility="visible" 


}
//---preview---
var PreviewMoleculeDoc
var ChemicalName
var MolecularFormula
var SMILES
function addMolecule()
{
   cw=previewMoleculeFrame.contentWindow

  var svgString=cw.svgDiv.innerHTML

    var parser = new DOMParser();
        PreviewMoleculeDoc = parser.parseFromString(svgString, "text/xml").documentElement;

   previewMoleculeFrameDiv.style.visibility="hidden"
   openAddMoleculeDraw()

}



function closeDrawMolecule()
{
     if(addElemMoleculeViz==true)
    {
        closeIframe("addElemMolecule");
        coverOff()

        var cw = addElemMoleculeCw

        if(EditMolecule==true && MoleculeDeleted==false)
        {
            var elemObjEdit = document.getElementById(DrawMoleculeEditId)
            elemObjEdit.style.display = "inline"

            elemObjEdit.lastChild.setAttribute("onmousedown", "editMoleculeDraw("+DrawMoleculeEditId+",evt)")
                elemObjEdit.lastChild.setAttribute("stroke", "none")

        }
        DraggingObj = false
        DrawMolecule = false
        EditMolecule = false

    cw.drawMoleculeShadowCheck.checked=false
        mySVG.removeAttribute("onmousedown")
        mySVG.removeAttribute("onmousemove")
        mySVG.removeAttribute("onmouseup")

        mySVG.removeAttribute('onclick')

        if(document.getElementById("activeElem"))
        {
            // alert(document.getElementById("activeElem").parentNode.getAttribute("id"))
            document.getElementById("activeElem").removeAttribute("class")
            for(var k=domActiveElemG.childNodes.length-1;k>=0;k--)
            domActiveElemG.removeChild(domActiveElemG.childNodes.item(k))


        }
        activeElem = null
        ActiveElem = null

        DrawX.style("display", "none")
        DrawX.attr("stroke", "violet")
        DrawX.attr("transform", null)

        cw.drawMoleculeFinishButton.disabled = true
        cw.drawMoleculeCancelButton.disabled = true
        cw.drawMoleculeShadowCheck.checked = false
        cw.drawMoleculeCancelButton.style.borderColor = ""
        cw.drawMoleculeDeleteButton.style.visibility = "hidden"
        cw.drawMoleculeBotButton.disabled=true

        cw.drawMoleculeEditSpan.innerText = "Draw Molecules"
        cw.drawMoleculeTopTable.style.backgroundColor = "white"
        cw.containerDiv.style.backgroundColor = "white"


    }
}

var DrawMolecule=false
function startMoleculeDraw()
{
     var cw = addElemMoleculeCw
    if(EditMolecule==false)
    {
        ActiveElem = null
        activeElem = null
        DrawMolecule = true
        DrawX.style("display", "inline")
        mySVG.setAttribute('onclick', "placeDrawMolecule()") //---click to add more icons for this session---
          cw.chemicalNameSpan.innerHTML=ChemicalName
    cw.smilesValue.value=SMILES
         cw.molecularFormulaSpan.innerHTML=MolecularFormula

    }



}


//---on add icon DrawX follows cursor
var EditMolecule=false
var MoleculeDeleted=false

function trackDrawMolecule()
{
    var cw = addElemMoleculeCw

    if( ZoomDrawing==false&&ActiveElem==null&&EditMolecule==false && MoleculeDeleted==false)
    {
        DrawX.style("display", "inline")
       DrawX.attr("transform", "translate("+SVGx+" "+SVGy+")")



    }
}

var MoleculeCenter=[]

var MoleculeVB
function placeDrawMolecule()
{
    var cw = addElemMoleculeCw

            coverOn()

            var opacity = cw.drawMoleculeOpacitySelect.options[cw.drawMoleculeOpacitySelect.selectedIndex].text


            ActiveElem = ActiveElemG.append("g")
            .attr("id", "activeElem")

       activeElem = document.getElementById("activeElem")
       for(var k=0;k< PreviewMoleculeDoc.childNodes.length;k++)
        {
                    var elem=PreviewMoleculeDoc.childNodes.item(k)//.cloneNode(true)
                    if(elem.nodeName=="line")
                    {
                    ActiveElem.append(elem.nodeName)
                    .attr("class", elem.getAttribute("class"))
                    .attr("x1", elem.getAttribute("x1"))
                    .attr("y1", elem.getAttribute("y1"))
                    .attr("x2", elem.getAttribute("x2"))
                    .attr("y2", elem.getAttribute("y2"))
                    .attr("style", elem.getAttribute("style"))

                    }
                     if(elem.nodeName=="circle")
                    {
                    ActiveElem.append(elem.nodeName)
                    .attr("class", elem.getAttribute("class"))
                    .attr("r", elem.getAttribute("r"))
                    .attr("cx", elem.getAttribute("cx"))
                    .attr("cy", elem.getAttribute("cy"))

                    }
        }

        var bb=activeElem.getBBox()
        var bbx=bb.x
        var bby=bb.y
        ActiveElem.append("rect")
        .attr("x",bbx)
        .attr("y",bby)
        .attr("width",bb.width)
        .attr("height",bb.height)
        .attr("pointer-events","all")
        .attr("fill","white")
       .attr("fill-opacity","0")
        .attr("cursor","move")
        var transX=-bbx+SVGx
        var transY=-bby+SVGy
        var cx=bbx+.5*bb.width
        var cy=bby+.5*bb.height
         MoleculeCenter =[cx, cy]

      activeElem.setAttribute("transform", "translate("+transX+" "+transY+")")
        DrawX.style("display", "inline")
        DrawX.attr("transform", "translate("+SVGx+" "+SVGy+")")


        //ActiveElem.style("cursor", "move")
        ActiveElem.attr("class", "dragTargetObj")




        if(cw.drawMoleculeShadowCheck.checked==true)
        ActiveElem.attr("filter", "url(#drop-shadow)")


         mySVG.removeAttribute('onclick')
        mySVG.style.cursor = ""
        mySVG.setAttribute("onmousedown", "startDragMolecule(evt)")
        mySVG.setAttribute("onmousemove", "dragMolecule(evt)")
        mySVG.setAttribute("onmouseup", "endDragMolecule()")

        cw.drawMoleculeCancelButton.disabled = false
        cw.drawMoleculeFinishButton.disabled = false
            cw.drawMoleculeBotButton.disabled=false


}


var TransformRequestObjRotate
var TransListRotate

function rotateMoleculeAdjust(factor)
{      var cw = addElemMoleculeCw

    var mult = parseFloat(cw.rotateDrawMoleculeAdjustSelect.options[cw.rotateDrawMoleculeAdjustSelect.selectedIndex].text)
    var rotateAdd = parseFloat(factor)*mult

    TransformRequestObjRotate = activeElem.ownerSVGElement.createSVGTransform()
    //---attach new or existing transform to element, init its transform list---
    var myTransListAnim=activeElem.transform
    TransListRotate=myTransListAnim.baseVal


    TransformRequestObjRotate.setRotate(rotateAdd,MoleculeCenter[0],MoleculeCenter[1])
    TransListRotate.appendItem(TransformRequestObjRotate)
    TransListRotate.consolidate()


}
var TransformRequestObjScale
var TransListScale
function scaleMoleculeAdjust(factor)
{
    var cw = addElemMoleculeCw
    var mult = parseFloat(cw.scaleDrawMoleculeAdjustSelect.options[cw.scaleDrawMoleculeAdjustSelect.selectedIndex].text)
    var scaleAdd = parseFloat(factor)*mult+1.00
 /*
    //---get center of activeElem-----
    domWrapper.appendChild(activeElem) //--inser in Wrapper--
    var bb=domWrapper.getBBox()
    bbx=bb.x
    bby=bb.y
    bbw=bb.width
    bbh=bb.height
    var cx=bbx+.5*bbw
    var cy=bby+.5*bbh

    domActiveElemG.appendChild(activeElem) //---extract from wrapper--
  */

    TransformRequestObjScale = activeElem.ownerSVGElement.createSVGTransform()
    //---attach new or existing transform to element, init its transform list---
    var myTransListAnim=activeElem.transform
    TransListScale=myTransListAnim.baseVal

    TransformRequestObjScale.setTranslate(MoleculeCenter[0],MoleculeCenter[1])
    TransListScale.appendItem(TransformRequestObjScale)
    TransListScale.consolidate()
    TransformRequestObjScale.setScale(scaleAdd,scaleAdd)
    TransListScale.appendItem(TransformRequestObjScale)
    TransListScale.consolidate()
     TransformRequestObjScale.setTranslate(-MoleculeCenter[0],-MoleculeCenter[1])
    TransListScale.appendItem(TransformRequestObjScale)

    TransListScale.consolidate()



}

function finishDrawMolecule()
{

    if(EditMolecule==true)
        finishEditMolecule()
        else if(document.getElementById("activeElem"))
        {
            var cw = addElemMoleculeCw
            activeElem.removeAttribute("class")
            activeElem.removeAttribute("onmouseup")
            coverOff()

            var finishedElem = document.getElementById("activeElem").cloneNode(true)

            finishedElem.style.cursor = "default"
            domActiveElemG.removeChild(document.getElementById("activeElem"))

            var id = "molecule"+new Date().getTime()

            finishedElem.setAttribute("id", id)
            finishedElem.setAttribute("chemical", ChemicalName)
            finishedElem.setAttribute("smiles", SMILES)
            finishedElem.setAttribute("formula", MolecularFormula)
              finishedElem.lastChild.setAttribute("onmousedown", "editMoleculeDraw("+id+",evt)")
             finishedElem.lastChild.removeAttribute("cursor")
            finishedElem.setAttribute("class", "moleculeElem")
             finishedElem.removeAttribute("systemLanguage");
        finishedElem.removeAttribute("requiredExtensions");
             domElemG.appendChild(finishedElem)

             //finishedElem.setAttribute("transform",finishedElem.getCTM())

                  console.log(finishedElem)
            ActiveElem = null
            activeElem = null

            // d3SVG.style("cursor", "default")
            mySVG.setAttribute('onclick', "placeDrawMolecule()") //---click to add more icons for this session---
            DrawX.style("display", "none")

            //topG.appendChild(dragDot)
            cw.drawMoleculeFinishButton.disabled = true
            cw.drawMoleculeCancelButton.disabled = true
            cw.drawMoleculeBotButton.disabled=true
        }
}




function cancelDrawMolecule()
{
    var cw = addElemMoleculeCw
    if(EditMolecule==true)
        cancelEditMolecule()
        else if(document.getElementById("activeElem"))
        {
            domActiveElemG.removeChild(document.getElementById("activeElem"))

            activeElem = null
            // d3SVG.style("cursor", "default")
            ActiveElem = null

            mySVG.setAttribute('onclick', "placeDrawMolecule()") //---click to add more icons for this session---
            DragDot.style("visibility", "hidden")
           //topG.appendChild(dragDot)
            cw.drawMoleculeFinishButton.disabled = true
            cw.drawMoleculeBotButton.disabled=true
                cw.drawMoleculeCancelButton.disabled = true
            cw.adjustedRotateMoleculeValue.value = 0

            coverOff()

        }

        cw.drawMoleculeCancelButton.style.borderColor = ""

}
//====================edit/update molecule===============================

var EditMolecule = false
var DrawMoleculeEditId
var EditThisMolecule
function editMoleculeDraw(elemObjEdit, evt) //--right button/mousedown on molecule---
{
    var isRightMB;
    var evtW = window.event;
    if(evtW)
    {
        isRightMB = evtW.which == 3;
        if (!isRightMB) // IE, Opera
            isRightMB = evtW.button == 2;
    }
    else //---firefox--
        isRightMB = evt.which == 3;

    if(isRightMB&&DrawMolecule==false&&ZoomDrawing==false)
    {
        EditThisMolecule = elemObjEdit

        DrawMoleculeEditId = elemObjEdit.getAttribute("id")//---used in cancel edit--

        ActiveElem = null
        EditMolecule = true
        if(addElemMoleculeLoad==false)
        {
            openIframe("AddElem", "addElemMolecule", 10)

        }
        else if(addElemMoleculeViz==false)
        {
            openIframe("AddElem", "addElemMolecule", 10)
            setEditMolecule()
        }
        else
            setEditMolecule()

    }
    if(isRightMB&&ZoomDrawing==true ) //---zoom drag
    {
        mySVG.setAttribute("onmousedown", "startDragZoom(evt)")
        mySVG.setAttribute("onmousemove", "dragZoom(evt)")
        mySVG.setAttribute("onmouseup", "endDragZoom(evt)")
        d3.select("#mySVG").on("mousedown.zoom", null)

        var dragTarget=evt.target

        var classed=dragTarget.getAttribute("class")
        dragTarget.setAttribute("class", "dragTargetObj")
        dragTarget.removeAttribute("onmousedown")
        dragTarget.setAttribute("style","cursor:move")
       dragTarget.setAttribute("opacity",.4)
        DrawX.style("display", "none")
        ZoomDraggedElems.push([dragTarget,"editMoleculeDraw("+dragTarget.id+",evt)",classed])
    }
}
//---after iframe loaded see sendSize() at addElemMolecule.htm---
var EditMoleculeObj

function setEditMolecule()
{
    coverOn()

    mySVG.removeAttribute('onclick')
    var cw = addElemMoleculeCw
    var elemObjEdit = document.getElementById(DrawMoleculeEditId)

    EditMoleculeObj = elemObjEdit.cloneNode(true)
    elemObjEdit.style.display = "none"
    EditMoleculeObj.setAttribute("id", "activeElem")
    EditMoleculeObj.setAttribute("class", "dragTargetObj")

    EditMoleculeObj.removeAttribute("onmousedown")
    EditMoleculeObj.lastChild.removeAttribute("onmousedown")
    EditMoleculeObj.lastChild.setAttribute("stroke", "orange")
    EditMoleculeObj.lastChild.setAttribute("stroke-width", "3")


    if(EditMoleculeObj.getAttribute("filter"))
        cw.drawMoleculeShadowCheck.checked = true

        domActiveElemG.insertBefore(EditMoleculeObj, domActiveElemG.firstChild)

        ActiveElem = d3.select("#activeElem")
        activeElem = document.getElementById("activeElem")

         cw.chemicalNameSpan.innerHTML=activeElem.getAttribute("chemical")
    cw.smilesValue.value=activeElem.getAttribute("smiles")
         cw.molecularFormulaSpan.innerHTML=activeElem.getAttribute("formula")

        cw.drawMoleculeDeleteButton.style.visibility = "visible"
        cw.drawMoleculeEditSpan.innerHTML = "Edit Molecule"
        cw.drawMoleculeTopButton.style.visibility = "visible"
        cw.drawMoleculeBotButton.style.visibility = "visible"
        cw.drawMoleculeTopTable.style.backgroundColor = "orange"
        cw.containerDiv.style.backgroundColor = "orange"
        cw.drawMoleculeCancelButton.disabled = false
        cw.drawMoleculeFinishButton.disabled = false
            cw.drawMoleculeBotButton.disabled=false

        var opacity = EditMoleculeObj.getAttribute("opacity")



        DrawX.attr("stroke", "darkorange")
        DrawX.style("display", "inline")
        DrawX.attr("transform", ActiveElem.attr("transform"))



        mySVG.style.cursor = ""

        // activeElem.setAttribute('onclick',"setMoleculeEditDrag()")
        setMoleculeEditDrag()

}
function setMoleculeEditDrag()
{

    activeElem.removeAttribute("onmousedown")


    //---timeout??---
    mySVG.setAttribute("onmousedown", "startDragMolecule(evt)")
    mySVG.setAttribute("onmousemove", "dragMolecule(evt)")
    mySVG.setAttribute("onmouseup", "endDragMolecule()")
    ActiveElem.style("cursor", "move")

}




function finishEditMolecule()
{

    if(document.getElementById("activeElem"))
    {
        var cw = addElemMoleculeCw

        var finishedElem = document.getElementById("activeElem").cloneNode(true)
        finishedElem.setAttribute("class", "moleculeElem")
        finishedElem.removeAttribute("style")
        finishedElem.removeAttribute("onmousedown")
        finishedElem.lastChild.setAttribute("onmousedown", "editMoleculeDraw("+DrawMoleculeEditId+",evt)")
                 finishedElem.lastChild.setAttribute("stroke", "none")



            finishedElem.setAttribute("id", DrawMoleculeEditId)

            domActiveElemG.removeChild(document.getElementById("activeElem"))
            finishedElem.style.cursor = "default"

            finishedElem.setAttribute("id", DrawMoleculeEditId)
            domElemG.insertBefore(finishedElem, EditThisMolecule)
            domElemG.removeChild(EditThisMolecule)
               console.log(finishedElem)
    }
    closeDrawMolecule()
}



function cancelEditMolecule()
{

    //---return to previous settings
    var elemObjEdit = document.getElementById(DrawMoleculeEditId)

    elemObjEdit.style.display = "inline"
    domActiveElemG.removeChild(document.getElementById("activeElem"))
    activeElem = null

    ActiveElem = null
    //topG.appendChild(dragDot) //--place drag dot on top---
    closeDrawMolecule()
    //setEditEllipse()

}
function drawMoleculeShadowChecked()
{

    var cw = addElemMoleculeCw
    if(cw.drawMoleculeShadowCheck.checked==true)
    {
        if(ActiveElem)
            ActiveElem.attr("filter", "url(#drop-shadow)")

    }
    else
    {
        if(ActiveElem)
            ActiveElem.attr("filter", null)

    }

}


function drawMoleculeOpacitySelected()
{
    var cw = addElemMoleculeCw
    var opacity = cw.drawMoleculeOpacitySelect.options[cw.drawMoleculeOpacitySelect.selectedIndex].text
    if(ActiveElem)
        ActiveElem.attr("opacity", opacity)

}

//=======================delete molecule==================
var MoleculeDeleted = false
//---button---
function removeCurrentDrawMolecule()
{

    domActiveElemG.removeChild(activeElem)
    var elemObjEdit = document.getElementById(DrawMoleculeEditId)
    domElemG.removeChild(elemObjEdit)
    MoleculeDeleted = true

    var cw = addElemMoleculeCw

    closeDrawMolecule()

}

//====================Top/Bot===================
function topDrawMolecule()
{

    var elemObjEdit = document.getElementById(DrawMoleculeEditId)
    var finishedElem = document.getElementById("activeElem").cloneNode(true)
    finishedElem.setAttribute("class", "circleElem")
    finishedElem.removeAttribute("style")
    finishedElem.style.cursor = "default"
    finishedElem.setAttribute("id", DrawMoleculeEditId)

    domActiveElemG.removeChild(document.getElementById("activeElem"))

    domElemG.removeChild(elemObjEdit)
    domElemG.appendChild(finishedElem)

    closeDrawMolecule()
}
function botDrawMolecule()
{
    if(EditMolecule)
    {
        var elemObjEdit = document.getElementById(DrawMoleculeEditId)
        var finishedElem = document.getElementById("activeElem").cloneNode(true)
        finishedElem.setAttribute("class", "circleElem")
        finishedElem.removeAttribute("style")
        finishedElem.style.cursor = "default"
        finishedElem.setAttribute("id", DrawMoleculeEditId)

        domActiveElemG.removeChild(document.getElementById("activeElem"))

        domElemG.removeChild(elemObjEdit)
        domElemG.insertBefore(finishedElem,domElemG.firstChild)

       closeDrawMolecule()
   }
   else
   {
        finishDrawMolecule()
        domElemG.insertBefore(domElemG.lastChild,domElemG.firstChild)
   }

}

