<?php

$it = new RecursiveDirectoryIterator("videos");
foreach(new RecursiveIteratorIterator($it) as $file) {
    $FILE = array_flip(explode('.', $file));
    if (isset($FILE['php']) || isset($FILE['mp4'])) {
	$link = $file;
        echo "<a href=$link>".substr($file,7,-4)."</a>". "<br />";
    }
}
?>
