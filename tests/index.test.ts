import { getInverseRelation } from '../src';

test('founder', () => {
  expect(getInverseRelation('founder')).toBe('founder of');
});

test('studied at', () => {
    expect(getInverseRelation('studied at')).toBe('studied at by');
});

test('greater than', () => {
    expect(getInverseRelation('greater than')).toBe('less than');
});

test('taller than', () => {
    expect(getInverseRelation('taller than')).toBe('shorter than');
});

test('founded', () => {
    expect(getInverseRelation('founded')).toBe('founded by');
});

test('founder of', () => {
    expect(getInverseRelation('founder of')).toBe('founder');
});

test('roommate of', () => {
    expect(getInverseRelation('roommate of')).toBe('roommate');
});

test('wrote', () => {
  expect(getInverseRelation('wrote')).toBe('written by');
});

test('played', () => {
  expect(getInverseRelation('played')).toBe('played by');
});

test('created', () => {
  expect(getInverseRelation('created')).toBe('created by');
});

test('author', () => {
  expect(getInverseRelation('author')).toBe('authored by');
});

test('authored', () => {
    expect(getInverseRelation('authored')).toBe('authored by');
});

test('fought', () => {
    expect(getInverseRelation('fought')).toBe('fought by');
});

test('employs', () => {
    expect(getInverseRelation('employs')).toBe('employed by');
});

test('author of', () => {
  expect(getInverseRelation('author of')).toBe('author');
});

test('authored by', () => {
    expect(getInverseRelation('authored by')).toBe('authored');
});

test('alternative', () => {
    expect(getInverseRelation('alternative')).toBe('alternative of');
});

test('ruled by', () => {
    expect(getInverseRelation('ruled by')).toBe('ruled');
});

test('friends with', () => {
    expect(getInverseRelation('friends with')).toBe('friends with');
});

test('friend of', () => {
    expect(getInverseRelation('friend of')).toBe('friend of');
});

test('led', () => {
    expect(getInverseRelation('led')).toBe('led by');
});

test('led by', () => {
    expect(getInverseRelation('led by')).toBe('leads');
});

test('mentored by', () => {
    expect(getInverseRelation('mentored by')).toBe('mentored');
});

test('mentored', () => {
    expect(getInverseRelation('mentored')).toBe('mentored by');
});

test('member of', () => {
    expect(getInverseRelation('member of')).toBe('has member');
});

test('member', () => {
    expect(getInverseRelation('member')).toBe('has member');
});

test('formed', () => {
    expect(getInverseRelation('formed')).toBe('formed by');
});

test('formed by', () => {
    expect(getInverseRelation('formed by')).toBe('formed');
});

test('overthrew', () => {
    expect(getInverseRelation('overthrew')).toBe('overthrown by');
});

test('overthrown by', () => {
    expect(getInverseRelation('overthrown by')).toBe('overthrew');
});

test('since', () => {
    expect(getInverseRelation('since')).toBe('start time of');
});

test('due to', () => {
    expect(getInverseRelation('due to')).toBe('reason for');
});

test('because', () => {
    expect(getInverseRelation('because')).toBe('cause of');
});

test('cause of', () => {
    expect(getInverseRelation('cause of')).toBe('because');
});

test('cause of', () => {
    expect(getInverseRelation('cause of')).toBe('because');
});

test('controlled by', () => {
    expect(getInverseRelation('controlled by')).toBe('controls');
});

test('controls', () => {
    expect(getInverseRelation('controls')).toBe('controlled by');
});

test('investigated', () => {
    expect(getInverseRelation('investigated')).toBe('investigated by');
});

test('investigated by', () => {
    expect(getInverseRelation('investigated by')).toBe('investigated');
});