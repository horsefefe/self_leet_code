var lengthOfLongestSubstring = function(s) {
  var len = s.length
  if (len === 1) {
    return 1
  } else if (len === 0) {
    return 0
  }
  var unique_map = {}
  var research_count = 0
  var final_map = {}
  var max_obj = null
  for (var i = 0; i < len; i++) {
    let temp = s[i]
    if (typeof unique_map[temp] == 'undefined' || unique_map[temp] < research_count) {
      // count index && update
      unique_map[temp] = i
      if (i == len - 1) {
        var copy_count = research_count
        var temp_obj = [copy_count, i]
        final_map[copy_count] = temp_obj
        if (max_obj === null) {
          max_obj = temp_obj
        } else if (temp_obj[1] - temp_obj[0] > max_obj[1] - max_obj[0]) {
          max_obj = temp_obj
        }
      }
    } else {
      // mid algo
      var copy_count = research_count
      var temp_obj = [copy_count, i - 1]
      final_map[copy_count] = temp_obj
      if (max_obj === null) {
        max_obj = temp_obj
      } else if (temp_obj[1] - temp_obj[0] > max_obj[1] - max_obj[0]) {
        max_obj = temp_obj
      }
      var index = unique_map[temp]
      research_count = index + 1
      // update duplicate index
      unique_map[temp] = i
    }
  }
  return max_obj[1] - max_obj[0] + 1
}
