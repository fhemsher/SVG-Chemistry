
var TransformRequestMoleculeObj
var TransListMolecule
var DragTargetMolecule=null;
var Dragging = false;
var OffsetX = 0;
var OffsetY = 0;
//---mouse down over element---
function startDragMolecule(evt)
{
    if(!Dragging) //---prevents dragging conflicts on other draggable elements---
    {
        if(evt.target.parentNode.getAttribute("class")=="dragTargetObj")
        {

                DragTargetMolecule=activeElem


            //---reference point to its respective viewport--
            var pnt = DragTargetMolecule.ownerSVGElement.createSVGPoint();
            pnt.x = evt.clientX;
            pnt.y = evt.clientY;
            //---elements transformed and/or in different(svg) viewports---
            var sCTM = DragTargetMolecule.getScreenCTM();
            var Pnt = pnt.matrixTransform(sCTM.inverse());

            TransformRequestMoleculeObj = DragTargetMolecule.ownerSVGElement.createSVGTransform()
            //---attach new or existing transform to element, init its transform list---
            var myTransListMoleculeAnim=DragTargetMolecule.transform
            TransListMolecule=myTransListMoleculeAnim.baseVal

            OffsetX = Pnt.x
            OffsetY = Pnt.y

            Dragging=true;
        }
    }
}
//---mouse move---
function dragMolecule(evt)
{
    if(Dragging)
    {
        var pnt = DragTargetMolecule.ownerSVGElement.createSVGPoint();
        pnt.x = evt.clientX;
        pnt.y = evt.clientY;
        //---elements in different(svg) viewports, and/or transformed ---
        var sCTM = DragTargetMolecule.getScreenCTM();
        var Pnt = pnt.matrixTransform(sCTM.inverse());
        Pnt.x -= OffsetX;
        Pnt.y -= OffsetY;

        TransformRequestMoleculeObj.setTranslate(Pnt.x,Pnt.y)
        TransListMolecule.appendItem(TransformRequestMoleculeObj)
        TransListMolecule.consolidate()

           DrawX.attr("transform", "translate("+SVGx+" "+SVGy+")")


    }
}
//--mouse up---
function endDragMolecule()
{
    Dragging = false ;


}
