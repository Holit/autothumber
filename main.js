/*
var i = 1;

do {
    if (currentActivity() == "com.tencent.mobileqq.activity.VisitorsActivity") {
        toast("开始自动点赞");
        var target = id("dyw").untilFind();
        for (var i = 0; i < target.length; i++) {
            for (var j = 0; j < 10; j++) {
                target.click();
            }
            target.scrollForward();

        }
    } else {
        toast("等待切换到com.tencent.mobileqq.activity.VisitorsActivity[" + i + "/30]");
        sleep(5000);
        i++;
    }


} while (i <= 30);
*/


var i = 1;

do {
    if (className("android.widget.TextView").text("联系人").exists()) {
        toast("命中 - 联系人匹配成功");
        if (className("android.widget.TextView").text("好友").exists()) {
            toast("命中 - 好友匹配成功");
            className("android.widget.TextView").text("好友").findOne().parent().click();
            do {
                if (id("rl").depth(12).className("android.widget.TextView").textEndsWith("联系人").exists()) {
                    toast("命中 - 截止条件匹配成功");
                    break;
                }
                if (className("android.widget.LinearLayout").exists()) {
                    var list = className("android.widget.LinearLayout").depth(11).untilFind();
                    toast("命中 - 好友框匹配成功");
                    /*
                    for (var i = 0; i < list.length; i++) {
                        //var bounds = list[i].bounds();
                        //console.log("检查 - list[" + i + "] = " + list[i]);
                        list[i].click();
                        for (var j = 0; j < 10; j++) {
                            className("android.widget.FrameLayout").id("l0b").click();
                        }
                        back();
                        //swipe(bounds.centerX(), bounds.Y(), bounds.centerX(), bounds.height());
                        sleep("2000");
                    }
                    */

                }
                toast("触发滚动");
                swipe(540, 1900, 540, 1000, 2000);
            } while (true)

        }
        break;
    }
    else {
        toast("等待切换到联系人页面[" + i + "/30]");
        sleep(5000);
        i++;
    }
} while (i <= 30);
