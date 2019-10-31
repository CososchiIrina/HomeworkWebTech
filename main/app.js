function distance(first, second){
	if(Array.isArray(first) && Array.isArray(second)){
		var first1=[], second1=[], bool=0, nr=0;
		for(var i=0;i<first.length;i++){
			bool=0;
			for(var j=0;j<first1.length;j++){
				if(first[i]===first1[j]){
					bool=1;
				}
			}
			if(bool==0){
				first1.push(first[i]);
			}
		}
		for(var i=0;i<second.length;i++){
			bool=0;
			for(var j=0;j<second1.length;j++){
				if(second[i]===second1[j]){
					bool=1;
				}
			}
			if(bool==0){
				second1.push(second[i]);
			}
		}
		for(var i=0;i<first1.length;i++){
			bool=0;
			for(var j=0;j<second1.length;j++){
				if(first1[i]===second1[j]){
					bool=1;
				}
			}
			if(bool==0){
				nr++;
			}
		}
		for(var i=0;i<second1.length;i++){
			bool=0;
			for(var j=0;j<first1.length;j++){
				if(second1[i]===first1[j]){
					bool=1;
				}
			}
			if(bool==0){
				nr++;
			}
		}
		
		return nr;
	}
	else{
		throw new Error('InvalidType');
	}
}

module.exports.distance=distance