<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;


class Video extends Model
{
    //
    public $json_url = "https://s3-ap-southeast-1.amazonaws.com/ysetter/media/video-search.json";
    
    private function retriveJson(){
        
        $dataSource = file_get_contents($this->json_url);

        return json_decode($dataSource, true);
    }

    public function get(){

        if( !Cache::get('videos') ){
            $data = Video::retriveJson();
            $json = json_encode( $data );
            Cache::put('videos', $json, 30);
        }else{
            $json = Cache::get('videos');
        }

        return $json;

    }
}
