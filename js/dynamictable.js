function addToTable(tablebody,points){
	for (var i = 0; i < points.length; i++) {
		celli="<td>"+i+"</td>";
		cellx="<td>"+points[i].x+"</td>";
		celly="<td>"+points[i].y+"</td>";
		tablebody.append("<tr>"+celli+cellx+celly+"</tr>")
	};
}

function initializeTable(tablebody){
	tablebody.empty();
}
