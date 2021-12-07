module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/estilospagina.css')
    eleventyConfig.addPassthroughCopy('./src/interacciones.js') 
    eleventyConfig.addPassthroughCopy('./src/imagenes') 
    


    return {
        dir: {
        input: "src"
        }
    };
}