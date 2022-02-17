const tokenizer = (syllable) =>{
    $.ajax({
        url: "https://loo-lang.herokuapp.com/spoon",
        type: "post",
        data: {
            data: syllable
        },
        dataType: 'json',
        success: (data, status) => {
            console.log(data, status);
            $("#outp").text(data);
        }
    });
    return syllable
}
const checkSwap = (syl) => {
    if(length(syl) === 2){
        syl[0], syl[1] = syl[1], syl[0]
    }
}