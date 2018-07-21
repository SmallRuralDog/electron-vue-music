const filters = {
        setCoursePrice: (course) => {
            if (course.pay_type === 2) {
                return '￥' + course.price
            } else {
                return '免费'
            }
        },
        formatMoney: (money, num = 2) => {
            return parseFloat(money).toFixed(num)
        },
        changeCount(x) {
            x = x / 10000;
            var y = x.toFixed(1) + "万";
            return y;
        },
        formatDuring(mss) {
            if (mss) {
                var minutes = parseInt(mss / 1000 / 60);
                var seconds = parseInt((mss % (1000 * 60)) / 1000);

                seconds = seconds > 9 ? seconds : '0' + seconds;
                return minutes >= 10 ? minutes : '0' + minutes + ":" + seconds;
            } else {
                return '00:00'
            }

        }
    }
;
export default filters
