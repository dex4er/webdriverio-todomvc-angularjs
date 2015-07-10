var chai;

before(function() {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');

    assert = chai.assert;

    chai.Should();
    chai.use(chaiAsPromised);
    chaiAsPromised.transferPromiseness = browser.transferPromiseness;
});

it('should load main page', function() {
    return browser
        .url('/')
        .getTitle().should.eventually.match(/TodoMVC/);
});

it('should add new todo', function() {
    return browser
        .url('/')
        .click('#new-todo')
        .keys('blabla\uE006')
        .isExisting('label=blabla').should.eventually.be.true;
});

it('should show active todos after click', function() {
	return browser
        .url('/')
        .click('=Active')
        .url().should.eventually.have.property('value')
            .that.have.string('#/active');
});
