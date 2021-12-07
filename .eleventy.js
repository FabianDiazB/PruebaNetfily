module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./blog/estilospagina.css');
    eleventyConfig.addPassthroughCopy('./blog/interacciones.js');
    


    return {
       dir: {
            input: "blog",
            output: "public" 
        }

    };
}