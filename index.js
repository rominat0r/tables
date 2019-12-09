window.onload = function() {

    var quill = new Quill('#container', {
        theme: 'snow',
        modules: {
            toolbar: '#toolbar',
            table: true,
        }
    });
    const tab = quill.getModule('table');
    document.querySelector('#insert-table').addEventListener('click', function() {
        tab.insertTable(2, 2);
    });
    //DELETE KEY DISABLE

    // -----------------------------
    quill.focus();


    $("#container").on("keydown", function(event) {
        var code;
        if (!e) var e = window.event; // some browsers don't pass e, so get it from the window
        if (e.keyCode) code = e.keyCode; // some browsers use e.keyCode
        else if (e.which) code = e.which; // others use e.which

        if (code === 46) {

            return false;

        }

    });
    var cellvalue;
    var cell;
    $("#container").on("keydown", "table", function() {

        cellvalue = $(this).html();
        alert(cellvalue);
    });
    $("#container").on("click", "td", function() {

        var x = this.getAttribute("data-row");
        var y = $(this).index();

        cell = this;
    });
    $(function contextMenu() {
        $.contextMenu({

            selector: '.context-menu-one',
            items: {


                sep1: "---------",
                key: {
                    name: "insert-row-above",
                    callback: function() {
                        tab.insertRowAbove();

                    }
                },

                key1: {
                    name: "insert-row-below",
                    callback: function() {
                        tab.insertRowBelow();
                    }
                },
                key2: {
                    name: "insert-column-left",
                    callback: function() {
                        tab.insertColumnLeft();
                    }
                },
                key3: {
                    name: "insert-column-right",
                    callback: function() {
                        tab.insertColumnRight();
                    }
                },
                key4: {
                    name: "delete-row",
                    callback: function() {
                        tab.deleteRow();
                    }
                },
                key5: {
                    name: "delete-column",
                    callback: function() {
                        tab.deleteColumn();
                    }
                },
                key6: {

                    name: "delete-table",
                    callback: function() {
                        tab.deleteTable();

                    }
                },
                sep2: "---------",
                key7: {

                    name: "red",
                    callback: function() {

                        cell.setAttribute("bgcolor", "#FF0000");

                    }
                },
                key8: {

                    name: "blue",
                    callback: function() {
                        cell.setAttribute("bgcolor", "#4169E1");

                    }
                },
                key9: {

                    name: "yellow",
                    callback: function() {
                        cell.setAttribute("bgcolor", "#FFFF00");

                    }
                },
            },
            events: {
                show: function(opt) {
                    // this is the trigger element
                    var $this = this;
                    // import states from data store 
                    $.contextMenu.setInputValues(opt, $this.data());
                    // this basically fills the input commands from an object
                    // like {name: "foo", yesno: true, radio: "3", &hellip;}
                },
                hide: function(opt) {
                    // this is the trigger element
                    var $this = this;
                    // export states to data store
                    $.contextMenu.getInputValues(opt, $this.data());
                    // this basically dumps the input commands' values to an object
                    // like {name: "foo", yesno: true, radio: "3", &hellip;}
                }
            }
        });
    });
};