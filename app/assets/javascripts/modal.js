// /* ========================================================================
//  * Bootstrap: modal.js v3.3.7
//  * http://getbootstrap.com/javascript/#modals
//  * ========================================================================
//  * Copyright 2011-2016 Twitter, Inc.
//  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
//  * ======================================================================== */
//
//
//  +function ($) {
//    'use strict';
//
//    // MODAL CLASS DEFINITION
//    // ======================section2-1
//    if (window.console) {
//      console.log("进入modal js源码");
//    }
//    var Modal = function (element, options) {
//      if (window.console) {
//        console.log("step 1");
//      }
//      // 传进来的各种参数
//      this.options             = options
//      this.$body               = $(document.body)
//      // element表示modal弹出框容器及内部元素，options是设置选项
//      this.$element            = $(element)
//      this.$dialog             = this.$element.find('.modal-dialog')
//      // modal下面的背景对象
//      this.$backdrop           = null
//      // 默认情况下，不设置是否已经显示弹窗
//      this.isShown             = null
//      this.originalBodyPad     = null
//      this.scrollbarWidth      = 0
//      this.ignoreBackdropClick = false
//      if (window.console) {
//        console.log("step 2");
//      }
//       // 如果设置了remote，就加载remote指定url的内容到modal-content样式的元素内，并触发loaded.bs.modal事件
//      if (this.options.remote) {
//        this.$element
//          .find('.modal-content')
//          .load(this.options.remote, $.proxy(function () {
//            this.$element.trigger('loaded.bs.modal')
//          }, this))
//      }
//      if (window.console) {
//        console.log("step 3");
//      }
//    }
//    if (window.console) {
//      console.log("step 4");
//    }
//    Modal.VERSION  = '3.3.7'
//
//    Modal.TRANSITION_DURATION = 300
//    Modal.BACKDROP_TRANSITION_DURATION = 150
//    // 默认设置
//    Modal.DEFAULTS = {
//      backdrop: true, // 默认单击弹窗以外的地方时自动关闭弹窗
//      keyboard: true, // 默认设置，按Esc键关闭弹窗
//      show: true// 默认设置，单击触发元素时打开弹窗
//    }
//    if (window.console) {
//      console.log("step 5");
//    }
//    // 反转弹窗状态
//    Modal.prototype.toggle = function (_relatedTarget) {
//      if (window.console) {
//        console.log("step 5-1");
//      }
//      //this.isShown是空的就show，否则hide
//      //<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
//      return this.isShown ? this.hide() : this.show(_relatedTarget)
//    }
//    if (window.console) {
//      console.log("step 6");
//    }
//    // 打开弹窗
//    Modal.prototype.show = function (_relatedTarget) {
//      if (window.console) {
//        console.log("step 7 Modal.prototype.show");
//      }
//      // 当前modal对象赋值为that，防止作用域冲突
//      var that = this
//      var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
//      // 定义弹窗前的触发事件
//      //r.Event {type: "show.bs.modal", relatedTarget: button.btn.btn-info.btn-lg, timeStamp: 1494321898670, jQuery3210582187519681155: true}
//      this.$element.trigger(e)
//      if (window.console) {
//        console.log("step 8");
//      }
//      // 如果已经打开了(或者曾经被阻止过)，则退出执行，后续代码不做处理
//      if (this.isShown || e.isDefaultPrevented()) return
//      // 设置状态为打开
//      this.isShown = true
//      if (window.console) {
//        console.log("step 9");
//      }
//
//      this.checkScrollbar()
//      this.setScrollbar()
//      this.$body.addClass('modal-open')
//      if (window.console) {
//        console.log("step 10");
//      }
//      // 处理键盘事件，主要是设置按Esc键的时候是否关闭弹窗
//      this.escape()
//      this.resize()
//      if (window.console) {
//        console.log("step 11");
//      }
//
//      this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
//      if (window.console) {
//        console.log("step 12");
//      }
//
//      this.$dialog.on('mousedown.dismiss.bs.modal', function () {
//        that.$element.one('mouseup.dismiss.bs.modal', function (e) {
//          if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
//        })
//      })
//      if (window.console) {
//        console.log("step 13");
//      }
//       // 如果单击了元素内的子元素(带有[data-dismiss="modal"]属性)，则关闭弹窗
//      this.backdrop(function () {
//        var transition = $.support.transition && that.$element.hasClass('fade')
//
//        if (!that.$element.parent().length) {
//          that.$element.appendTo(that.$body) // don't move modals dom position
//        }
//        if (window.console) {
//          console.log("step 14");
//        }
//
//        that.$element
//          .show()
//          .scrollTop(0)
//          if (window.console) {
//            console.log("step 15");
//          }
//
//        that.adjustDialog()
//        if (window.console) {
//          console.log("step 16");
//        }
//
//        if (transition) {
//          that.$element[0].offsetWidth // force reflow
//        }
//        if (window.console) {
//          console.log("step 17");
//        }
//
//        that.$element.addClass('in')
//        if (window.console) {
//          console.log("step 18");
//        }
//
//        that.enforceFocus()
//        if (window.console) {
//          console.log("step 19");
//        }
//
//        var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
//        if (window.console) {
//          console.log("step 20");
//        }
//
//        transition ?
//          that.$dialog // wait for modal to slide in
//            .one('bsTransitionEnd', function () {
//              that.$element.trigger('focus').trigger(e)
//            })
//            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
//          that.$element.trigger('focus').trigger(e)
//      })
//    }
//    if (window.console) {
//      console.log("step 21");
//    }
//    //关闭弹窗
//    Modal.prototype.hide = function (e) {
//      if (window.console) {
//        console.log("step 22");
//      }
//
//      if (e) e.preventDefault()
//
//      e = $.Event('hide.bs.modal')
//
//      this.$element.trigger(e)
//      if (window.console) {
//        console.log("step 23");
//      }
//
//      if (!this.isShown || e.isDefaultPrevented()) return
//
//      this.isShown = false
//
//      this.escape()
//      this.resize()
//
//      $(document).off('focusin.bs.modal')
//      if (window.console) {
//        console.log("step 24");
//      }
//
//      this.$element
//        .removeClass('in')
//        .off('click.dismiss.bs.modal')
//        .off('mouseup.dismiss.bs.modal')
//        if (window.console) {
//          console.log("step 25");
//        }
//
//      this.$dialog.off('mousedown.dismiss.bs.modal')
//      if (window.console) {
//        console.log("step 26");
//      }
//
//      $.support.transition && this.$element.hasClass('fade') ?
//        this.$element
//          .one('bsTransitionEnd', $.proxy(this.hideModal, this))
//          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
//        this.hideModal()
//    }
//    if (window.console) {
//      console.log("step 27");
//    }
//   // 确保当前打开的弹窗处于焦点状态
//    Modal.prototype.enforceFocus = function () {
//      if (window.console) {
//        console.log("step 28");
//      }
//
//      $(document)
//        .off('focusin.bs.modal') // guard against infinite focus loop
//        .on('focusin.bs.modal', $.proxy(function (e) {
//          if (document !== e.target &&
//              this.$element[0] !== e.target &&
//              !this.$element.has(e.target).length) {
//            this.$element.trigger('focus')
//          }
//        }, this))
//        if (window.console) {
//          console.log("step 29");
//        }
//
//    }
//    // 按Esc键是否退出的处理
//    Modal.prototype.escape = function () {
//      if (window.console) {
//        console.log("step 30");
//      }
//
//      if (this.isShown && this.options.keyboard) {
//        if (window.console) {
//          console.log("step 31");
//        }
//        this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
//          e.which == 27 && this.hide()
//        }, this))
//      } else if (!this.isShown) {
//        this.$element.off('keydown.dismiss.bs.modal')
//      }
//    }
//
//    Modal.prototype.resize = function () {
//      if (window.console) {
//        console.log("step 32");
//      }
//      if (this.isShown) {
//        if (window.console) {
//          console.log("step 33");
//        }
//        $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
//      } else {
//        $(window).off('resize.bs.modal')
//      }
//    }
//    // 关闭弹窗   ---------section3-9
//    Modal.prototype.hideModal = function () {
//      if (window.console) {
//        console.log("step 34");
//      }
//      var that = this
//      this.$element.hide()
//      this.backdrop(function () {
//        that.$body.removeClass('modal-open')
//        that.resetAdjustments()
//        that.resetScrollbar()
//        that.$element.trigger('hidden.bs.modal')
//      })
//    }
//    // 删除背景，关闭弹窗时触发  ----------section3-10
//    Modal.prototype.removeBackdrop = function () {
//      if (window.console) {
//        console.log("step 35");
//      }
//      this.$backdrop && this.$backdrop.remove()
//      this.$backdrop = null
//    }
//    // 添加背景，打开弹窗时触发
//    Modal.prototype.backdrop = function (callback) {
//      if (window.console) {
//        console.log("step 36");
//      }
//      var that = this
//      var animate = this.$element.hasClass('fade') ? 'fade' : ''
//
//      if (this.isShown && this.options.backdrop) {
//        if (window.console) {
//          console.log("step 37");
//        }
//        var doAnimate = $.support.transition && animate
//
//        this.$backdrop = $(document.createElement('div'))
//          .addClass('modal-backdrop ' + animate)
//          .appendTo(this.$body)
//
//        this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
//          if (window.console) {
//            console.log("step 38");
//          }
//
//          if (this.ignoreBackdropClick) {
//            this.ignoreBackdropClick = false
//            return
//          }
//          if (e.target !== e.currentTarget) return
//          if (window.console) {
//            console.log("step 39");
//          }
//          this.options.backdrop == 'static'
//            ? this.$element[0].focus()
//            : this.hide()
//        }, this))
//        if (window.console) {
//          console.log("step 40");
//        }
//
//        if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
//
//        this.$backdrop.addClass('in')
//
//        if (!callback) return
//        if (window.console) {
//          console.log("step 41");
//        }
//
//        doAnimate ?
//          this.$backdrop
//            .one('bsTransitionEnd', callback)
//            .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
//          callback()
//          if (window.console) {
//            console.log("step 42");
//          }
//
//      } else if (!this.isShown && this.$backdrop) {
//        if (window.console) {
//          console.log("step 43");
//        }
//
//        this.$backdrop.removeClass('in')
//
//        var callbackRemove = function () {
//          that.removeBackdrop()
//          callback && callback()
//        }
//        $.support.transition && this.$element.hasClass('fade') ?
//          this.$backdrop
//            .one('bsTransitionEnd', callbackRemove)
//            .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
//          callbackRemove()
//
//      } else if (callback) {
//        if (window.console) {
//          console.log("step 44");
//        }
//
//        callback()
//      }
//    }
//
//    // these following methods are used to handle overflowing modals
//
//    Modal.prototype.handleUpdate = function () {
//      if (window.console) {
//        console.log("step 45");
//      }
//
//      this.adjustDialog()
//    }
//
//    Modal.prototype.adjustDialog = function () {
//      if (window.console) {
//        console.log("step 46");
//      }
//
//      var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight
//
//      this.$element.css({
//        paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
//        paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
//      })
//    }
// //-------section3-5-1-1
//    Modal.prototype.resetAdjustments = function () {
//      if (window.console) {
//        console.log("step 47");
//      }
//
//      this.$element.css({
//        paddingLeft: '',
//        paddingRight: ''
//      })
//    }
//
//    Modal.prototype.checkScrollbar = function () {
//      if (window.console) {
//        console.log("step 48");
//      }
//      var fullWindowWidth = window.innerWidth
//      if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
//        var documentElementRect = document.documentElement.getBoundingClientRect()
//        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
//      }
//      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
//      this.scrollbarWidth = this.measureScrollbar()
//    }
//
//    Modal.prototype.setScrollbar = function () {
//      if (window.console) {
//        console.log("step 49");
//      }
//      var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
//      this.originalBodyPad = document.body.style.paddingRight || ''
//      if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
//    }
//
//    Modal.prototype.resetScrollbar = function () {
//      if (window.console) {
//        console.log("step 50");
//      }
//      this.$body.css('padding-right', this.originalBodyPad)
//    }
//
//    Modal.prototype.measureScrollbar = function () { // thx walsh
//      if (window.console) {
//        console.log("step 51");
//      }
//      var scrollDiv = document.createElement('div')
//      scrollDiv.className = 'modal-scrollbar-measure'
//      this.$body.append(scrollDiv)
//      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
//      this.$body[0].removeChild(scrollDiv)
//      return scrollbarWidth
//    }
//
//
//    // MODAL PLUGIN DEFINITION
//    // =======================section2
//
//    function Plugin(option, _relatedTarget) {
//      if (window.console) {
//        console.log("step 52");
//      }
//      return this.each(function () {
//        if (window.console) {
//          console.log("step 53");
//        }
//        var $this   = $(this)//是上一步的$target [div#myModal.modal.fade]
//        var data    = $this.data('bs.modal')//undefined
//        var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
//
//        if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
//        if (typeof option == 'string') data[option](_relatedTarget)
//        else if (options.show) data.show(_relatedTarget)
//        //data=Modal {options: Object, $body: r.fn.init(1), $element: r.fn.init(1), $dialog: r.fn.init(1), $backdrop: null…}
//      })
//    }
//    if (window.console) {
//      console.log("step 54");
//    }
//    var old = $.fn.modal
//
//    $.fn.modal             = Plugin
//    $.fn.modal.Constructor = Modal
//    if (window.console) {
//      console.log("step 55");
//    }
//
//    // MODAL NO CONFLICT
//    // =================
//    if (window.console) {
//      console.log("step 56");
//    }
//    $.fn.modal.noConflict = function () {
//      $.fn.modal = old
//      return this
//    }
//    if (window.console) {
//      console.log("step 57");
//    }
//
//    // MODAL DATA-API
//    // ==============section1
//
//    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
//      if (window.console) {
//        console.log("step 58");
//      }
//      //[button.btn.btn-info.btn-lg]
//      var $this   = $(this)
//      //第一次undefined
//      var href    = $this.attr('href')
//      //疑问：$this.attr('data-target')=#myModal???
//      // 获取data-target属性值，如果没有，则获取href值，该值是所弹出元素的id
//      var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
//      //$target.data()不会取到子div里面的data.
//      // 如果弹窗元素上已经有该弹窗实例(即弹出过一次了)，则设置option值为字符串toggle
//      // 否则将remote值(如果有的话)、弹窗元素上的自定义属性值集合、触发元素上的自定义属性值集合，合并为option对象
//      //[div#myModal.modal.fade]
//      //Object {remote: undefined, target: "#myModal", toggle: "modal"}
//      var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
//      if (window.console) {
//        console.log("step 59");
//      }
//      if ($this.is('a')) e.preventDefault()
//
//      $target.one('show.bs.modal', function (showEvent) {
//        if (window.console) {
//          console.log("step 60");
//        }
//
//        if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
//        $target.one('hidden.bs.modal', function () {
//          if (window.console) {
//            console.log("step 61");
//          }
//          //定义一次hide事件，给所单击元素加上焦点??????为什么要加焦点啊？
//          $this.is(':visible') && $this.trigger('focus')
//        })
//      })
//      if (window.console) {
//        console.log("step 61-1");
//      }
//      //$target [div#myModal.modal.fade]
//      //option Object {remote: undefined, target: "#myModal", toggle: "modal"}
//      //<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
//      Plugin.call($target, option, this)
//    })
//
//  }(jQuery);
