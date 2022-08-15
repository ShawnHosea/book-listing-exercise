
module.exports = function header(props = {}) {
  
  let loggedIn = props.auth 
    let isloggedIn = `
    <div
    class="
    h-full
    "
    >
      <header
      class="
        z1
        pt0
        pb0
        sticky
        relative-lg
        flex
        items-center
        justify-between
        top0
        bg-p4
      " 
    >
    <div class="flex items-center justify-between w-full pr1 pl1">
      <a
        aria-label="Noticate"
        href="/"
        class="
          mr4
          items-center
          cursor-pointer
          text-p1
          text-h5
          no-underline
          font-bold
        "
      >
      Goodreads Bookcase
      </a>
      </div>
      </header>
    </div>
        `

        if (!loggedIn) {
          return isloggedIn 
      } else {
          return isloggedIn
      }
  

}

    