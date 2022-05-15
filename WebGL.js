function main(){
    //https://github.com/mdn/translated-content/blob/main/files/ja/web/api/webgl_api/tutorial/getting_started_with_webgl/index.md?plain=1#L12
    //参照コード
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (gl == null){
        alert("WebGL を初期化できません。ブラウザーまたはマシンが対応していない可能性があります")
    }
    gl.clearColor(0.0,0.,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_8BIT);

}   

Window.onload = mein;

