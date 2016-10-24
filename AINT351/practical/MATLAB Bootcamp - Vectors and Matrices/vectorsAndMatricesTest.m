function tests = vectorsAndMatricesTest
    tests = functiontests(localfunctions);
end

%% Test: Variable
function vectorTest(testCase)
    global v;
    initialize();
    assert(isequal(v,[1 2 3 4]));
end

%% Test: scalarMultiplication
function scalarMultiplicationTest(testCase)
    expected = [3 6 9 12];
    actual = scalarMultiplication([1 2 3 4],3);
    assert(isequal(actual,expected));
    expected = [14 28];
    actual = scalarMultiplication([7 14],2);
    assert(isequal(actual,expected));
end

%% Test: scalarMultiplication
function columnVectorTest(testCase)
    global u;
    expected = [1;2;3;4];
    assert(isequal(u,expected));
end

%% Test: 
function dotProductTest(testCase)
    expected = 18;
    actual = dotProduct([2 2 2],[3 3 3]);
    assert(isequal(actual,expected));
    expected = 27;
    actual = dotProduct([1 2 3 4],[2 2 3 3]);
    assert(isequal(actual,expected));
end

%% Test: 
function matrixTest(testCase)
    global M;
    initialize();
    expected = [2 4 6 8;10 12 14 16;18 20 22 24];
    assert(isequal(M,expected));
end

function matrixMultiplicationTest(testCase)
    expected = [9 12 15;19 26 33;29 40 51];
    actual = matrixMultiplication([1 2;3 4;5 6],[1 2 3;4 5 6]);
    assert(isequal(actual,expected));
    expected = [22 28;49 64];
    actual = matrixMultiplication([1 2 3;4 5 6],[1 2;3 4;5 6]);
    assert(isequal(actual,expected));
end

%% Test: 
function selectRowTest(testCase)
    expected = [3 4];
    actual = selectRow([1 2;3 4;5 6],2);
    assert(isequal(actual,expected));
    expected = [1 2 3];
    actual = selectRow([1 2 3;4 5 6],1);
    assert(isequal(actual,expected));
end

%% Test: 
function selectMaxTest(testCase)
    expected = 5;
    actual = selectMax([2 3 4 5 4]);
    assert(isequal(actual,expected));
    expected = 1;
    actual = selectMax([1 0]);
    assert(isequal(actual,expected));
end

%% Test: 
function indexOfMaxTest(testCase)
    expected = 4;
    actual = indexOfMax([1 3 4 5 4 3]);
    assert(isequal(actual,expected));
    expected = 1;
    actual = indexOfMax([1 0 0]);
    assert(isequal(actual,expected));
end

function updateTest(testCase)
    expected = [0.3 2.2;2.4 1.6];
    actual = update([0.3 2.2;2.0 1.6],2);
    assert(isequal(actual,expected));
    expected = [1.56 1.2 1.1;1.4 1.5 1.6;1.7 1.8 1.9];
    actual = update([1.3 1.2 1.1;1.4 1.5 1.6;1.7 1.8 1.9],1);
    assert(isequal(actual,expected));
end