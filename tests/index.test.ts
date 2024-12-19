// tests/index.test.ts
import { getInverseRelation } from '../src';

test('founder', () => {
  expect(getInverseRelation('founder')).toBe('is founder of');
});

test('founded', () => {
    expect(getInverseRelation('founded')).toBe('is founded by');
});

test('is founder of', () => {
    expect(getInverseRelation('is founder of')).toBe('founder');
});

test('is roommate of', () => {
    expect(getInverseRelation('is roommate of')).toBe('roommate');
});

test('wrote', () => {
  expect(getInverseRelation('wrote')).toBe('is written by');
});

test('played', () => {
  expect(getInverseRelation('played')).toBe('is played by');
});

test('created', () => {
  expect(getInverseRelation('created')).toBe('is created by');
});

test('author', () => {
  expect(getInverseRelation('author')).toBe('is authored by');
});

test('authored', () => {
    expect(getInverseRelation('authored')).toBe('is authored by');
});

test('fought', () => {
    expect(getInverseRelation('fought')).toBe('is fought by');
});

test('employs', () => {
    expect(getInverseRelation('employs')).toBe('is employed by');
});

test('is author of', () => {
  expect(getInverseRelation('is author of')).toBe('author');
});

test('is authored by', () => {
    expect(getInverseRelation('is authored by')).toBe('authored');
});

test('alternative', () => {
    expect(getInverseRelation('alternative')).toBe('is alternative of');
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
    expect(getInverseRelation('led')).toBe('is led by');
});

test('is led by', () => {
    expect(getInverseRelation('is led by')).toBe('led');
});

test('is mentored by', () => {
    expect(getInverseRelation('is mentored by')).toBe('mentored');
});

test('mentored', () => {
    expect(getInverseRelation('mentored')).toBe('is mentored by');
});

test('member of', () => {
    expect(getInverseRelation('member of')).toBe('has member');
});

test('is member of', () => {
    expect(getInverseRelation('is member of')).toBe('member');
});

test('member', () => {
    expect(getInverseRelation('member')).toBe('has member');
});

test('formed', () => {
    expect(getInverseRelation('formed')).toBe('is formed by');
});

test('is formed by', () => {
    expect(getInverseRelation('is formed by')).toBe('formed');
});

test('overthrew', () => {
    expect(getInverseRelation('overthrew')).toBe('is overthrown by');
});

test('is overthrown by', () => {
    expect(getInverseRelation('is overthrown by')).toBe('overthrew');
});

test('since', () => {
    expect(getInverseRelation('since')).toBe('is the start time of');
});

test('due to', () => {
    expect(getInverseRelation('due to')).toBe('is due to');
});

test('is due to', () => {
    expect(getInverseRelation('is due to')).toBe('due to');
});

test('because', () => {
    expect(getInverseRelation('because')).toBe('is the cause of');
});

test('cause of', () => {
    expect(getInverseRelation('cause of')).toBe('is the cause of');
});

test('is the cause of', () => {
    expect(getInverseRelation('is the cause of')).toBe('cause of');
});

test('controlled by', () => {
    expect(getInverseRelation('controlled by')).toBe('controls');
});

test('controls', () => {
    expect(getInverseRelation('controls')).toBe('is controlled by');
});

test('investigated', () => {
    expect(getInverseRelation('investigated')).toBe('is investigated by');
});

test('is investigated by', () => {
    expect(getInverseRelation('is investigated by')).toBe('investigated');
});