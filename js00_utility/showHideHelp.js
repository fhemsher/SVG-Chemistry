
function hideAllHelps()
{
    introDiv.style.visibility="hidden"
    helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"


    componentHelpLibraryDiv.style.visibility="hidden"
    componentHelpLibraryDiv.style.height="1px"
     componentTableCloseButton.style.visibility="hidden"
        graphHelpDiv.style.height="1px"
    graphHelpDiv.style.visibility="hidden"
    chartHelpDiv.style.height="1px"
    chartHelpDiv.style.visibility="hidden"

   schematicHelpLibraryDiv.style.visibility="hidden"
   schematicHelpLibraryDiv.style.height="1px"
    schematicTableCloseButton.style.visibility="hidden"
  tessellateHelpDiv.style.height="1px"
   tessellateHelpDiv.style.visibility="hidden"
    moleculeHelpDiv.style.visibility="hidden"
    moleculeHelpDiv.style.height="1px"
}



function openHelp()
{

    var height=helpDiv.scrollHeight
    d3.select("#helpDiv").transition().duration(800).style("height", height+"px")
    helpDiv.style.visibility="visible"

   introDiv.style.visibility="hidden"
   componentHelpLibraryDiv.style.height="1px"
    componentHelpLibraryDiv.style.visibility="hidden"
   schematicHelpLibraryDiv.style.visibility="hidden"
   schematicHelpLibraryDiv.style.height="1px"
    schematicTableCloseButton.style.visibility="hidden"
   tessellateHelpDiv.style.height="1px"
   tessellateHelpDiv.style.visibility="hidden"
   chartHelpDiv.style.height="1px"
   chartHelpDiv.style.visibility="hidden"
   graphHelpDiv.style.height="1px"
   graphHelpDiv.style.visibility="hidden"


}
function closeHelp()
{
    var height=1
    d3.select("#helpDiv").transition().duration(800).style("height", height+"px")
    setTimeout('helpDiv.style.visibility="hidden"',900)

    introDiv.style.visibility="hidden"
}


function openComponentHelp()
{     introDiv.style.visibility="hidden"
                componentHelpLibraryDiv.style.top = "60px"


    var height=componentHelpLibraryDiv.scrollHeight
    d3.select("#componentHelpLibraryDiv").transition().duration(800).style("height", height+"px")
    componentHelpLibraryDiv.style.visibility="visible"


   helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"
     tessellateHelpDiv.style.height="1px"
   tessellateHelpDiv.style.visibility="hidden"
     moleculeHelpDiv.style.height="1px"
   moleculeHelpDiv.style.visibility="hidden"

   schematicHelpLibraryDiv.style.visibility="hidden"
   schematicHelpLibraryDiv.style.height="1px"
    schematicTableCloseButton.style.visibility="hidden"
   chartHelpDiv.style.height="1px"
   chartHelpDiv.style.visibility="hidden"
   graphHelpDiv.style.height="1px"
   graphHelpDiv.style.visibility="hidden"

}
function closeComponentHelp()
{
    var height=1
    d3.select("#componentHelpLibraryDiv").transition().duration(800).style("height", height+"px")
    setTimeout('componentHelpLibraryDiv.style.visibility="hidden"',900)
}


function openSchematicHelp()
{       introDiv.style.visibility="hidden"
                schematicHelpLibraryDiv.style.top = "60px"


    var height=schematicHelpLibraryDiv.scrollHeight
    d3.select("#schematicHelpLibraryDiv").transition().duration(800).style("height", height+"px")
    schematicHelpLibraryDiv.style.visibility="visible"

   helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"
       tessellateHelpDiv.style.height="1px"
   tessellateHelpDiv.style.visibility="hidden"
   moleculeHelpDiv.style.height="1px"
   moleculeHelpDiv.style.visibility="hidden"
    chartHelpDiv.style.height="1px"
   chartHelpDiv.style.visibility="hidden"
   graphHelpDiv.style.height="1px"
   graphHelpDiv.style.visibility="hidden"


    componentHelpLibraryDiv.style.visibility="hidden"
    componentHelpLibraryDiv.style.height="1px"
     componentTableCloseButton.style.visibility="hidden"

}
function closeSchematicHelp()
{
    var height=1
    d3.select("#schematicHelpLibraryDiv").transition().duration(800).style("height", height+"px")
    setTimeout('schematicHelpLibraryDiv.style.visibility="hidden"',900)
}



function openMoleculeHelp()
{       introDiv.style.visibility="hidden"
                moleculeHelpDiv.style.top = "60px"


    var height=moleculeHelpDiv.scrollHeight
    d3.select("#moleculeHelpDiv").transition().duration(800).style("height", height+"px")
    moleculeHelpDiv.style.visibility="visible"

   helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"

      tessellateHelpDiv.style.height="1px"
   tessellateHelpDiv.style.visibility="hidden"
    chartHelpDiv.style.height="1px"
   chartHelpDiv.style.visibility="hidden"
   graphHelpDiv.style.height="1px"
   graphHelpDiv.style.visibility="hidden"

    componentHelpLibraryDiv.style.visibility="hidden"
    componentHelpLibraryDiv.style.height="1px"
     componentTableCloseButton.style.visibility="hidden"
    schematicHelpLibraryDiv.style.visibility="hidden"
    schematicHelpLibraryDiv.style.height="1px"
     schematicHelpLibraryDiv.style.visibility="hidden"
      schematicTableCloseButton.style.visibility="hidden"
}
function closeMoleculeHelp()
{
    var height=1
    d3.select("#moleculeHelpDiv").transition().duration(800).style("height", height+"px")
    setTimeout('moleculeHelpDiv.style.visibility="hidden"',900)
}


function openTessellateHelp()
{       introDiv.style.visibility="hidden"
               tessellateHelpDiv.style.top = "60px"


    var height=tessellateHelpDiv.scrollHeight
    d3.select("#tessellateHelpDiv").transition().duration(800).style("height", height+"px")
    tessellateHelpDiv.style.visibility="visible"

   helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"



    componentHelpLibraryDiv.style.visibility="hidden"
    componentHelpLibraryDiv.style.height="1px"
    moleculeHelpDiv.style.visibility="hidden"
    moleculeHelpDiv.style.height="1px"
     componentTableCloseButton.style.visibility="hidden"
    schematicHelpLibraryDiv.style.visibility="hidden"
    schematicHelpLibraryDiv.style.height="1px"
     schematicHelpLibraryDiv.style.visibility="hidden"
      schematicTableCloseButton.style.visibility="hidden"
    chartHelpDiv.style.height="1px"
   chartHelpDiv.style.visibility="hidden"
   graphHelpDiv.style.height="1px"
   graphHelpDiv.style.visibility="hidden"
}
function closeTessellateHelp()
{
    var height=1
    d3.select("#tessellateHelpDiv").transition().duration(800).style("height", height+"px")
    setTimeout('tessellateHelpDiv.style.visibility="hidden"',900)
}

function openGraphHelp()
{     introDiv.style.visibility="hidden"
                graphHelpDiv.style.top = "60px"


    var height=graphHelpDiv.scrollHeight
    d3.select("#graphHelpDiv").transition().duration(800).style("height", height+"px")
    graphHelpDiv.style.visibility="visible"


   helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"

   schematicHelpLibraryDiv.style.visibility="hidden"
   schematicHelpLibraryDiv.style.height="1px"
    schematicTableCloseButton.style.visibility="hidden"
    chartHelpDiv.style.height="1px"
    chartHelpDiv.style.visibility="hidden"
    moleculeHelpDiv.style.height="1px"
    moleculeHelpDiv.style.visibility="hidden"
    tessellateHelpDiv.style.height="1px"
    tessellateHelpDiv.style.visibility="hidden"

}
function closeGraphHelp()
{
    var height=1
    d3.select("#graphHelpDiv").transition().duration(800).style("height", height+"px")
    setTimeout('graphHelpDiv.style.visibility="hidden"',900)
}


function openChartHelp()
{     introDiv.style.visibility="hidden"
                chartHelpDiv.style.top = "60px"


    var height=chartHelpDiv.scrollHeight
    d3.select("#chartHelpDiv").transition().duration(800).style("height", height+"px")
    chartHelpDiv.style.visibility="visible"


   helpDiv.style.visibility="hidden"
   helpDiv.style.height="1px"

   schematicHelpLibraryDiv.style.visibility="hidden"
   schematicHelpLibraryDiv.style.height="1px"
    schematicTableCloseButton.style.visibility="hidden"
       graphHelpDiv.style.height="1px"
    graphHelpDiv.style.visibility="hidden"
    moleculeHelpDiv.style.height="1px"
    moleculeHelpDiv.style.visibility="hidden"
    tessellateHelpDiv.style.height="1px"
    tessellateHelpDiv.style.visibility="hidden"
}
function closeChartHelp()
{
    var height=1
    d3.select("#chartHelpDiv").transition().duration(800).style("height", height+"px")
    setTimeout('chartHelpDiv.style.visibility="hidden"',900)
}


function openZoomHelp()
{      introDiv.style.visibility="hidden"
    var height=zoomHelpDiv.scrollHeight
    d3.select("#zoomHelpDiv").transition().duration(500).style("height", height+"px")
    zoomHelpDiv.style.visibility="visible"
}
function closeZoomHelp()
{
    var height=1
    d3.select("#zoomHelpDiv").transition().duration(500).style("height", height+"px")
    setTimeout('zoomHelpDiv.style.visibility="hidden"',600)
}

