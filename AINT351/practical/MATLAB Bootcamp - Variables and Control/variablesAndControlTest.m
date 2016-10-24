function tests = variablesAndControlTest
    tests = functiontests(localfunctions);
end

%% Test: Variable
function variableTest(testCase)
    global playerLocation;
    initialize();
    assert(playerLocation == 2);
end
    
%% Test: Output
function outputTest(testCase)
    initialize();
    output = evalc('describeLocation()');
    [m,instances] = size(strfind(output,'You are in a sunny field'));
    assert(instances == 1);
end

%% Test: Branching
function branchingTest(testCase)
    global playerLocation;
    playerLocation = 0;
    output = evalc('describeLocation()');
    [m,instances] = size(strfind(output,'You are by a babbling brook'));
    assert(instances == 1);
    playerLocation = 1;
    output = evalc('describeLocation()');
    [m,instances] = size(strfind(output,'You are high in some misty mountains'));
    assert(instances == 1);
    playerLocation = 2;
    output = evalc('describeLocation()');
    [m,instances] = size(strfind(output,'You are in a sunny field'));
    assert(instances == 1);
    playerLocation = 3;
    output = evalc('describeLocation()');
    [m,instances] = size(strfind(output,'You are under a great oak'));
    assert(instances == 1);   
    playerLocation = 7;
    output = evalc('describeLocation()');
    [m,instances] = size(strfind(output,'You are lost'));
    assert(instances == 1);
end

%% Test: Functions
function functionTest(testCase)
    d = description(0);
    assert(strcmp(d,'You are by a babbling brook') == 1);
    d = description(1);
    assert(strcmp(d,'You are high in some misty mountains') == 1);
    d = description(2);
    assert(strcmp(d,'You are in a sunny field') == 1);
    d = description(3);
    assert(strcmp(d,'You are under a great oak') == 1);
    d = description(4);
    assert(strcmp(d,'You are lost') == 1);
end

%% Test: Loops
function loopTest(testCase)
    global playerLocation;
    playerLocation = 0;
    output = evalc('playTurns(3)');
    [m,instances] = size(strfind(output,'You are by a babbling brook'));
    assert(instances == 3);
    playerLocation = 2;
    output = evalc('playTurns(10)');
    [m,instances] = size(strfind(output,'You are in a sunny field'));
    assert(instances == 10);
end
