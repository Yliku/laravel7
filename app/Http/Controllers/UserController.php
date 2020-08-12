<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller {
    /**
     * 展示给定用户的配置文件。
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function show(Request $request) {
        $value1 = $request->session()->get('key');
        $value2 = $request->session()->all();
        var_dump($value2);
        //
    }
}
