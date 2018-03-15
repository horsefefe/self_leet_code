function ListNode(val) {
  this.val = val
  this.next = null
}
var link_list_1 = new ListNode(2)
link_list_1.next = new ListNode(4)
link_list_1.next.next = new ListNode(3)
var link_list_2 = new ListNode(5)
link_list_2.next = new ListNode(6)
link_list_2.next.next = new ListNode(4)
var addTwoNumbers = function(l1, l2) {
  var final_list_node = null
  var cur_node = null
  var prev_node = null
  var extra = 0
  var l1_cur = l1
  var l2_cur = l2
  do {
    var val1 = l1_cur ? l1_cur.val : 0
    var val2 = l2_cur ? l2_cur.val : 0
    l1_cur = l1_cur ? l1_cur.next : l1_cur
    l2_cur = l2_cur ? l2_cur.next : l2_cur
    var tempval = val1 + val2 + extra
    if (tempval >= 10) {
      tempval = tempval - 10
      extra = 1
    } else {
      extra = 0
    }
    cur_node = new ListNode(tempval)
    if (final_list_node === null) {
      final_list_node = prev_node = cur_node
    } else {
      prev_node.next = cur_node
      prev_node = cur_node
    }
  } while (l1_cur || l2_cur)
  if (extra == 1) {
    cur_node = new ListNode(1)
    prev_node.next = cur_node
    extra = 0
  }
  return final_list_node
}
addTwoNumbers(link_list_1, link_list_2)
