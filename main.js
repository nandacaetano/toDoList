let add = document.querySelector('#add').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("dIGITE UMA TAREFA")
    }

    else{
        document.querySelector('#tasks').innerHTML+= `

            <div class='task'>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <img src="srcs/img/mdi_garbage.svg" alt="">
                </button>
            </div>

        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            };
            
        }

        var tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
    }
}