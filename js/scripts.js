var crismasday = new Date(2020,11,25);

function crismasdayfunction(){
    var today = new Date();
    var distence = crismasday - today;
    
    var day = Math.floor(distence / (1000*60*60*24));
    
    var hour = Math.floor((distence % (1000*60*60*24)) / (1000*60*60));
    
    var minute = Math.floor((distence % (1000*60*60)) / (1000*60));
    
    var second = Math.floor((distence % (1000*60) / 1000));
    
    document.getElementById("crismas").innerHTML=(day +" Days \n"+ hour +" Hours \n "+
                minute +" minute \n"+ second +" second Left");
}
crismasdayfunction();
setInterval(crismasdayfunction);
