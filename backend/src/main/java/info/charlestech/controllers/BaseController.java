package info.charlestech.controllers;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by charles on 16/12/8.
 */
@RequestMapping(value = "/rest/api")
@Controller
public class BaseController {
    @RequestMapping(value = "/hello")
    @ResponseBody
    public JSONObject hello() {
        JSONObject obj = new JSONObject();
        obj.put("msg", "hello world");
        return obj;
    }
}
