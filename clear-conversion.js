// Copy and paste to clear the conversion list
(async function(){
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
      
    const root = document.getElementsByClassName("list media-list playlist-items")[1]
    const buttonList = [...root.querySelectorAll('.delete-btn')]
    for (const button of buttonList){
        button.click();
        await sleep(1000);
        console.log("echo");
        document.querySelector(".confirm-btn").click()
        await sleep(1000);
    }    
})()
