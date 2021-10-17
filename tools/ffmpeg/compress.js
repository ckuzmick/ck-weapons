var cp = require("child_process")

const compress = async function(file, proxyPath, options){
    await cp.spawnSync('ffmpeg', [
      '-i', file,
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      // '-vf', ('scale='+ outputWidth +':'+outputHeight ),
      '-preset', 'slow',
      '-crf', (options && options.crfVal) ? options.crfVal : '23',
      '-ac', '2',
      '-c:a', 'aac',
      '-b:a', '128k',
      proxyPath
    ], {
      stdio: [
        0, // Use parent's stdin for child
        'pipe', // Pipe child's stdout to parent
        2 // Direct child's stderr to a file
      ]
    });
  }


module.exports = compress