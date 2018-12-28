<?php
$domain = 'http://bacalaureat.local/';
$it = new RecursiveDirectoryIterator("videos");
$list_videos = array();
foreach(new RecursiveIteratorIterator($it) as $file) {
    $FILE = array_flip(explode('.', $file));
    if (isset($FILE['php']) || isset($FILE['mp4'])) {
	$link = $domain.$file;
	$video = substr($file,7,-4);
	$list_videos[$video] = $link;
	  
    }
}
echo json_encode($list_videos);
?>
