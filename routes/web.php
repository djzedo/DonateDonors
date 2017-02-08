<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    $display = 'none';
    $proyectos = DB::table('projects')->get();
    return view('tuProyecto')->with('proyectos',$proyectos)->with('display',$display);
    
});

Route::post('Agregar', function(){
    $name = Input::get('nombre');
    
    if(DB::table('projects')->whereNombre($name)->first() !== null){
        
        return 'Poyecto ya existe';
        
    }else{
        DB::table('projects')->insert(['nombre'=>$name]);
            return Redirect::to('/');
    }
});

Route::post('Donar',function(){
    $donacion = Input::get('Donacion');
    $id = Input::get('id');
    
    
    DB::table('projects')->where('id',$id)->increment('cantidad', $donacion);
        return Redirect::to('/');
});