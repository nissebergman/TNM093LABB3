var rBoxInput=0;
var gBoxInput=0;
var bBoxInput=0;

var rTriangleInput=0;
var gTriangleInput=0;
var bTriangleInput=0;

$(document).ready(function() {
$("#standardTransfer").hide();
});

$("#toggleStandard").click(function(){
$("#standardTransfer").show();
$("#container").hide();
});

$("#toggleCustom").click(function(){
$("#standardTransfer").hide();
$("#container").show();
});

$("#submitBoxColors").click(function(){	
	rBoxInput = $("#rBoxInput").val();
	gBoxInput = $("#gBoxInput").val(); 
	bBoxInput = $("#bBoxInput").val();
	changeBoxColors(rBoxInput,gBoxInput,bBoxInput);
	triggerTransferFunctionUpdate();
});

$("#submitTriColors").click(function(){	
	rTriInput = $("#rTriInput").val();
	gTriInput = $("#gTriInput").val(); 
	bTriInput = $("#bTriInput").val();
	changeTriColors(rTriInput,gTriInput,bTriInput);
	triggerTransferFunctionUpdate();
});

$("#addBox").click(function(){	
      layer.add(rect);
      layer.add(boxTr);
      boxTr.attachTo(rect);
      layer.draw();
});
$("#addTriangle").click(function(){	
      layer.add(triangle);
      layer.add(triangleTr);
      triangleTr.attachTo(triangle);
      layer.draw();
});


