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
    }
};
export default filters
