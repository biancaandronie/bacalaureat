<?php

$it = new RecursiveDirectoryIterator("../src/videos");
foreach(new RecursiveIteratorIterator($it) as $file) {
    $FILE = array_flip(explode('.', $file));
    if (isset($FILE['php']) || isset($FILE['mp4'])) {
	$link = substr($file,7);
        echo "<a href=$link>".substr($file,14,-4)."</a>". "<br />";
    }
}
?>
