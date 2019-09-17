## js获取各种日期

	var timestamp=new Date().getTime()；

	  let endTime = new Date(element.demandInfo.projectDeadlin).getTime(),
	    nowTime = new Date().getTime();
	  let dateDiff = endTime - nowTime;//时间差的毫秒数
	  let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
	  if (dayDiff < 0) {
	    element.ending = '已';
	  } else if (dayDiff === 0) {
	    let leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
	    let hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
	    if (hours > 0) {
	      element.ending = hours + '小时后';
	    } else if (hours = 0) {
	      let leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
	      let minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
	      if (minutes > 0) {
	        element.ending = hours + '分钟后';
	      } else if (minutes = 0) {
	        let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
	        let seconds = Math.round(leave3 / 1000);
	        element.ending = seconds + '秒后';
	      }
	    }
	  } else {
	    element.ending = dayDiff + '天后';
	  }