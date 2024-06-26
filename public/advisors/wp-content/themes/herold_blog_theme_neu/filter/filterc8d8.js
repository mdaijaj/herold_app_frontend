jQuery(document).ready(function () {
  jQuery(document).on("click", ".js-filter-item", function (e) {
    var category_btn = jQuery(this).attr("data-category");
    var category_posts = jQuery(".current_posts").attr("data-category");

    if (category_btn !== category_posts) {
      jQuery(".js-filter-item").attr("disabled", "disabled");
      jQuery(".shadow .right_author_name").addClass("loading");
      jQuery(".shadow .author_readtime").addClass("loading");
      jQuery(".shadow .cta_btn").addClass("loading");
      jQuery(".shadow .sh_img_inner").addClass("loading");
      jQuery(".sh_img_inner img").hide();
      jQuery(".js-filter-item").removeClass("js-filter-active");
      jQuery(this).addClass("js-filter-active");
      e.preventDefault();
      var category = jQuery(this).data("category");

      jQuery.ajax({
        url: wpAjax.ajaxurl,
        data: { action: "filter", category: category },
        type: "post",
        success: function (result) {
          jQuery(".wp-block-columns.flex_wrapper.no_padd").html(result);
        },
        error: function (result) {
          console.warn(results);
        },
      });
    }
  });

  jQuery(document).on(
    "click",
    ".js-filter-item.js-filter-active",
    function (e) {
      jQuery(".js-filter-item").attr("disabled", "disabled");
      jQuery(".shadow .right_author_name").addClass("loading");
      jQuery(".shadow .author_readtime").addClass("loading");
      jQuery(".shadow .cta_btn").addClass("loading");
      jQuery(".shadow .sh_img_inner").addClass("loading");

      jQuery(".sh_img_inner img").hide();

      jQuery(".js-filter-item").removeClass("js-filter-active");
      jQuery.ajax({
        url: wpAjax.ajaxurl,
        data: { action: "filter", category: "all" },
        type: "post",
        success: function (result) {
          jQuery(".wp-block-columns.flex_wrapper.no_padd").html(result);
        },
        error: function (result) {
          console.warn(results);
        },
      });
    }
  );
});
