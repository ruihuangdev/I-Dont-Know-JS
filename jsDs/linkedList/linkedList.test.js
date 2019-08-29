import { Node, linkedList } from "./linkedList";

it("Node(100) returns {data: 100, next: null} ", () => {
  expect(new Node(100).data).toBe(100);
});

it("linkedList() returns null", () => {
  expect(new linkedList().head).toBe(null);
});
