Template.postPage.helpers({
	commetns: function() {
		return Comments.find({postId: this._id});
	}
});
