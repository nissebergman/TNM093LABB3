	
  var xAxisStart = 10;
  var xAxisEnd = 366;
  var yAxisStart = 10;
  var yAxisEnd = 150;
  var width = 600;
  var height = 152;
  var newX;


      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      var xAxis = new Konva.Line({
      	points: [xAxisStart, yAxisEnd, xAxisEnd, yAxisEnd],
      	stroke: 'black',
      	strokeWidth: 5,
      });

      var yAxis = new Konva.Line({
      	points: [xAxisStart, yAxisStart, xAxisStart, yAxisEnd],
      	stroke: 'black',
      	strokeWidth: 5
      });

      layer.add(xAxis);

      layer.add(yAxis);

      var rect = new Konva.Rect({
        x: 40,
        y: 60,
        width: 100,
        height: 90,
        fill: 'black',
        name: 'rect',
        draggable: true,
        dragBoundFunc: function(pos) {
        	newX = pos.x;
        	if (pos.x > xAxisEnd-rect.width()) {
        		newX = xAxisEnd-rect.width();
        	} else if (pos.x < xAxisStart) {
        		newX = xAxisStart;
        	}
        	//var newX = ((pos.x > xAxisEnd-100 ? xAxisEnd-100 : pos.x) || (pos.x < xAxisStart ? xAxisStart : pos.x));
        	return {
	        	x: newX,
	        	y: this.absolutePosition().y
        	};
    	}
	});
      
		function changeBoxColors(r,g,b) {
			console.log("hje");
		rect.fill('rgb('+r+','+g+','+b+')');
		layer.draw();
	}



      var boxText = new Konva.Text({
        x: 100,
        y: 70
      });
      layer.add(boxText);
      updateBoxText();


      // create new Box Transformer
      var boxTr = new Konva.Transformer();
      var rotateEnabled = boxTr.rotateEnabled();
      boxTr.rotateEnabled(false);


      rect.on('transformstart', function() {
        console.log('transform start');
      });

      rect.on('dragmove', function() {
        updateBoxText();
      });
      rect.on('transform', function() {
        updateBoxText();
        console.log('transform');
      });

      rect.on('transformend', function() {
        console.log('transform end');
      });

      var triangle = new Konva.RegularPolygon({
        x: 260,
        y: 150,
        sides: 3,
        radius: 50,
        fill: 'black',
        name: 'triangle',
        draggable: true,
        dragBoundFunc: function(pos) {
        	newX = pos.x;
        	if (pos.x > xAxisEnd-rect.width()) {
        		newX = xAxisEnd-rect.width();
        	} else if (pos.x < xAxisStart) {
        		newX = xAxisStart;
        	}
        	//var newX = ((pos.x > xAxisEnd-100 ? xAxisEnd-100 : pos.x) || (pos.x < xAxisStart ? xAxisStart : pos.x));
        	return {
	        	x: newX,
	        	y: this.absolutePosition().y
        	};
    	}

      });

        function changeTriColors(r,g,b) {
		triangle.fill('rgb('+r+','+g+','+b+')');
		console.log(r,g,b);
		layer.draw();
	}

      

     var triangleText = new Konva.Text({
        x: 300,
        y: 70
      });
      layer.add(triangleText);
      updateTriangleText();

      var triangleTr = new Konva.Transformer();
      var rotateEnabled = triangleTr.rotateEnabled();
      triangleTr.rotateEnabled(false);
      triangleTr.centeredScaling(true);


      triangle.on('transformstart', function() {
        console.log('transform start');
      });

      triangle.on('dragmove', function() {
        updateTriangleText();
      });
      triangle.on('transform', function() {
        updateTriangleText();
        console.log('transform');
      });

      triangle.on('transformend', function() {
        console.log('transform end');
      });

      function updateTriangleText() {
        var lines = [
        /*
          'x: ' + (triangle.x()-xAxisStart - triangle.width()*0.3*triangle.scaleX()),
          'y: ' + triangle.y(),
          'width: ' + triangle.width() * triangle.scaleX()/2,
          'height: ' + triangle.height() * triangle.scaleY()/2,
          'scaleX: ' + triangle.scaleX(),
          'scaleY: ' + triangle.scaleY()
          */
        ];
        triangleText.text(lines.join('\n'));
        layer.batchDraw();
        triggerTransferFunctionUpdate();
      }

      function updateBoxText() {
        var lines = [
        /*
          'x: ' + (rect.x()-xAxisStart),
          'y: ' + rect.y(),
          'width: ' + rect.width() * rect.scaleX(),
          'height: ' + rect.height() * rect.scaleY(),
          'scaleX: ' + rect.scaleX(),
          'scaleY: ' + rect.scaleY()
          */
        ];
        boxText.text(lines.join('\n'));
        layer.batchDraw();
        triggerTransferFunctionUpdate();
      }
      
/*
      document.getElementById('button').addEventListener('click', addShape);
      addShape();

      function addShape() {
        layer.add(
new Konva.Rect({
        x: 160,
        y: 60,
        width: 100,
        height: 90,
        fill: 'red',
        name: 'rect',
        stroke: 'black',
        draggable: true,
        dragBoundFunc: function(pos) {
        	return {
        	x: pos.x,
        	y: this.absolutePosition().y
        	};
    	}
    })
		);
        // force update manually
        tr.forceUpdate();
        layer.draw();
      }
*/
